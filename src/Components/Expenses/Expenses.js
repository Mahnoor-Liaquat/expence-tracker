import React, { useState } from "react";
import Card from "../UI/Card";
import ExpenseFilter from "./ExpenseFilter";
import ExpenseList from "./ExpenseList";
import "./Expenses.css";

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2022");
  const filteredChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filteredByYearHandler = props.expenses.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

 

  return (
    <Card className='expenses'>
      <ExpenseFilter
        selected={filteredYear}
        onFilteredChangeYear={filteredChangeHandler}
      />

      <ExpenseList onFilteredByYear={filteredByYearHandler} />

    </Card>
  );
};

export default Expenses;
