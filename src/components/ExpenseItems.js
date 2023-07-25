import React, { useState, useEffect } from "react";
import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare } from "@fortawesome/free-regular-svg-icons";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

function ExpenseItem(props) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedDate, setEditedDate] = useState(props.date);
  const [editedTitle, setEditedTitle] = useState(props.title);
  const [editedAmount, setEditedAmount] = useState(props.amount);
  const [listdata, setListdata] = useState(props.items);
  useEffect(() => {
    setListdata(props);
  }, [props]);
  useEffect(() => {
    setEditedDate(props.date);
    setEditedTitle(props.title);
    setEditedAmount(props.amount);
  }, [props.date, props.title, props.amount]);

  const deleteHandler = () => {
    props.deleteExpense(props.id);
  };

  const editHandler = () => {
    setIsEditing(true);
  };

  const saveHandler = (event) => {
    event.preventDefault();

    // Log the value of the 'name' attribute of the event target
    console.log(event.target.name);

    const editedExpense = {
      id:props.id,
      date: editedDate,
      title: editedTitle,
      amount: editedAmount,
    };
    console.log(editedExpense,'editedExpense');
    setListdata(listdata,editedExpense)
    // Call the saveExpense function from the parent component with the edited expense data
    props.saveExpense(editedExpense);
    setIsEditing(false);
  };

  const cancelHandler = () => {
    setIsEditing(false);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    if (name === "date") {
      // Convert the date string to a Date object and update editedDate
      setEditedDate(new Date(value));
    } else if (name === "title") {
      setEditedTitle(value);
    } else if (name === "amount") {
      setEditedAmount(value);
    }
  };

  return (
    <li>
      <div className="expense-item">
        <div>
          <ExpenseDate date={props.date} />
        </div>
        {!isEditing ? (
          <div className="expense-item__description">
            <h2>{listdata?.title}</h2>
            <div className="expense-item__price">${listdata?.amount}</div>
          </div>
        ) : (
          <div className="expense-item__description">
            <input
              type="date" // Add date input for editing the date
              name="date"
              value={editedDate.toISOString().split("T")[0]} // Convert to string in the format "YYYY-MM-DD"
              onChange={handleChange}
            />
            <input
              type="text"
              name="title"
              value={editedTitle}
              onChange={handleChange}
            />
            <input
              type="number"
              name="amount"
              min="0.01"
              step="0.01"
              value={editedAmount}
              onChange={handleChange}
            />
          </div>
        )}
        {!isEditing && (
          <>
            <button className="button-edit" onClick={editHandler}>
              <FontAwesomeIcon icon={faPenToSquare} />
            </button>
            <button className="button" onClick={deleteHandler}>
              <FontAwesomeIcon icon={faTrash} />
            </button>
          </>
        )}
        {isEditing && (
          <>
            <button className="button-save" onClick={saveHandler}>
              Save
            </button>
            <button className="button-cancel" onClick={cancelHandler}>
              Cancel
            </button>
          </>
        )}
      </div>
    </li>
  );
}

export default ExpenseItem;
