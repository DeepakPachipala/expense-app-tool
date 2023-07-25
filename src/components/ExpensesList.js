import React, { useState,useEffect } from "react";
import ExpenseItem from "./ExpenseItems";
import "./ExpensesList.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { saveAs } from "file-saver";
import { faFileCsv } from "@fortawesome/free-solid-svg-icons";

const ExpensesList = (props) => {
  const [listdata, setListdata] = useState(props.items);
  useEffect(() => {
    setListdata(props.items);
  }, [props.items]);
  if (props.items.length === 0) {
    return <h2 className="expenses-list__fallback">found no expenses</h2>;
  }
  const deleteExpense = (expenseId) => {
    // Call the deleteExpense function from the parent component with the expense ID
    console.log("Delete expense with ID:", expenseId);
    props.deleteExpense(expenseId);
  };

  const editExpense = (expenseId) => {
    // Call the editExpense function from the parent component with the expense ID
    console.log("Edit expense with ID:", expenseId);
    props.editExpense(expenseId);

    // const handleEdit = (expenseId) => {
    //   setEditedexpenseId(expenseId);
    //   const expenseToEdit = expenseData.find((expense) => expense.id === expenseId);
    //   console.log(expenseToEdit, "1111111");
    //   setEditedexpenseName(expenseToEdit?.name);
    //   setEditedexpenseAge(expenseToEdit?.age);
    // };
  };

  const exportToCSV = () => {
    // Use props.items instead of userData
    const csvData = props.items
      .map((expense) => `${expense.title},${expense.amount},${expense.date}`)
      .join("\n");
    const blob = new Blob([csvData], { type: "text/csv;charset=utf-8" });
    saveAs(blob, "expenses.csv");
  };

  const saveExpense = (expenseId) => {
    const expenseToSave = listdata?.filter(
      (expense) => expense?.id !== expenseId?.id
    );
    setListdata([expenseId,...expenseToSave])
    console.log("expenseToSave", expenseToSave);
    console.log(expenseId,'1111111');
  };
  return (
    <div>
      <ul className="expenses-list">
        {listdata.map((expense) => (
          <ExpenseItem
            id={expense.id}
            key={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
            saveExpense={saveExpense}
            deleteExpense={deleteExpense}
            editExpense={editExpense}
          />
        ))}
      </ul>
      <button className="button-download-csv" onClick={exportToCSV}>
      <FontAwesomeIcon icon={faFileCsv} />
      </button>
    </div>
  );
};

export default ExpensesList;
