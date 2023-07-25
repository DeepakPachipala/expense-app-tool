import React, { useState } from "react";

import ExpensesList from "./ExpensesList";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesChart from "./ExpensesChart";
import "./Expenses.css";

const Expenses = (props) => {
  const [filteredYear, setFilterYear] = useState("2023");

  const filterChangerHandler = (selectedYear) => {
    setFilterYear(selectedYear);
  };
  const filteredExpenses = props.items.filter(expense => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  const deleteExpense = (expenseId) => {
    // Call the deleteExpense function from the parent component with the expense ID
    console.log("ExpensesPage:", expenseId);
    props.deleteExpense(expenseId)
  };

  const editExpense = (expenseId) => {
    // Call the editExpense function from the parent component with the expense ID
    console.log("ExpensesPage:", expenseId);
    props.editExpense(expenseId)
  };

  return (
    <div>
      <div className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          onChangeFilter={filterChangerHandler}
        />
        <ExpensesChart expenses={filteredExpenses} />
        <ExpensesList 
        items={filteredExpenses} 
        deleteExpense={deleteExpense}
        editExpense={editExpense}
        />
      </div>  
    </div>
  );
};

export default Expenses;
