import React from "react";
import Card from "../UI/Card";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
  const saveExpenseDataHandler = (expenseData) => {
    const data = {
      ...expenseData,
      id: Math.round(Math.random() * 100),
    };
    props.onGetExpenseData(data);
  };
  return (
    <Card className='new-expense'>
      <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />
    </Card>
  );
};

export default NewExpense;