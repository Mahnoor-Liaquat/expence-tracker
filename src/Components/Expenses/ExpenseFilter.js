import React from "react";
import "./ExpenseFilter.css";

const ExpenseFilter = (props) => {
  const filterChangeHandler = (e) => {
    props.onFilteredChangeYear(e.target.value);
  };
  return (
    <div className='expense-form-control'>
      <label htmlFor='filterYear'>Filter by Year</label>
      <select
        id='filterYear'
        value={props.selected}
        onChange={filterChangeHandler}
      >
        <option value='2022'>2022</option>
        <option value='2023'>2023</option>
        <option value='2024'>2024</option>
        <option value='2025'>2025</option>
      </select>
    </div>
  );
};

export default ExpenseFilter;