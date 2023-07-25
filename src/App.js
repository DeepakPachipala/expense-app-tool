import React, {useState} from 'react';

import NewExpense from './components/NewExpense';
import Expenses from './components/Expenses';

const DUMMY_EXPENSES = [
  {
    id: "e1",
    title: "Toilet Paper",
    amount: 94.25,
    date: new Date(2023, 5, 15),
  },
  {
    id: "e2",
    title: "New Tv",
    amount: 25000,
    date: new Date(2023, 10, 20),
  },
  {
    id: "e3",
    title: "Car Insurence",
    amount: 20000,
    date: new Date(2023, 3, 10),
  },
  {
    id: "e4",
    title: "New Desk (Wooden)",
    amount: 2000,
    date: new Date(2023, 12, 25),
  },
];

function App() {
  const [expenses,setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };

  const deleteExpense = (expenseId) => {
    // Call the deleteExpense function from the parent component with the expense ID
    console.log("APP.js:", expenseId);
    const updateExpenses = expenses.filter(obj => obj.id !== expenseId);
    console.log(updateExpenses)
    setExpenses(updateExpenses)
    // props.deleteExpense(expenseId)
  };

  const editExpense = (expenseId) => {
    // Call the editExpense function from the parent component with the expense ID
    console.log("App.js:", expenseId);
    // props.editExpense(expenseId)
  };
  
  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses 
      items={expenses} 
      deleteExpense={deleteExpense}
      editExpense={editExpense}
      />
    </div>
  );
}

export default App;