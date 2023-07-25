import React, { useState } from 'react';

import './ExpenseForm.css';

const ExpenseForm = (props) => {
    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredAmount, setEnteredAmount] = useState('');
    const [enteredDate, setEnteredDate] = useState('');
    const [isValid, setIsValid] = useState(true);

    const titleChangerHandler = (event) => {
        if (event.target.value.trim().length) {
            setIsValid(true)
        }
        setEnteredTitle(event.target.value);
    };
    const amountChangerHandler = (event) => {
        if (event.target.value.trim().length) {
            setIsValid(true)
        }
        setEnteredAmount(event.target.value);
    };
    const dateChangerHandler = (event) => {
        if (event.target.value.trim().length) {
            setIsValid(true)
        }
        setEnteredDate(event.target.value);
    };

    const submitHandler = (event) => {
        event.preventDefault();
        if (enteredTitle.trim().length === 0) {
            setIsValid(false);
            return;
        }

        const expenseDate = {
            title: enteredTitle,
            amount: enteredAmount,
            date: new Date(enteredDate)
        };
        props.onSaveExpenseData(expenseDate);
        setEnteredTitle('');
        setEnteredAmount('');
        setEnteredDate('');
    };

    return (
        <form onSubmit={submitHandler}>
            <div className='new-expense__controls'>
                <div className='new-expense__control'>
                    <label style={{color: !isValid ? 'red' : 'black'}}>Title</label>
                    <input placeholder='Expense Name' style={{borderColor: !isValid ? 'red' : '#ccc', background: !isValid ? 'salmon' : 'transparent'}} type='text' value={enteredTitle} onChange={titleChangerHandler} />
                </div>
                <div className='new-expense__control'>
                    <label >Amount</label>
                    <input placeholder='Enter Amount' type='number' value={enteredAmount} min="0.01" step="0.01" onChange={amountChangerHandler} />
                </div>
                <div className='new-expense__control'>
                    <label>Date</label>
                    <input type='date' value={enteredDate} min=" " max=" " onChange={dateChangerHandler} />
                </div>
            </div>
            <div className="new-expense__actions">
                <button type="button" onClick={props.onCancel}>Cancel</button>
                <button type="submit">Add Expense</button>
            </div>
        </form>
    );
    
};




export default ExpenseForm;