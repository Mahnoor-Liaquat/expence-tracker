import React from "react";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
import "./ExpenseItem.css";

const ExpenseItem = (props) => {
  return (
    <li>
      <Card className="expense-item">
        <ExpenseDate date={props.date} />
        <div className="expense-item_description">
          <h2>{props.title}</h2>
          <p>${props.amount}</p>
        </div>
      </Card>
    </li>
  );
};

export default ExpenseItem;
