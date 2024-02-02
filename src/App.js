import React, { useState } from "react";
import Expenses from "./Components/Expenses/Expenses";
import NewExpense from "./Components/NewExpense/NewExpense";
import "./App.css";

const dummyExpenses = [
  { id: 1, title: "A book", amount: 29.8, date: new Date(2022, 2, 1) },
  { id: 2, title: "Buy Apple", amount: 2.8, date: new Date(2022, 1, 2) },
  { id: 3, title: "Clothes", amount: 25.8, date: new Date(2022, 0, 10) },
  { id: 4, title: "A book", amount: 29.8, date: new Date(2023, 2, 1) },
  { id: 5, title: "Buy Mango", amount: 2.8, date: new Date(2023, 6, 2) },
  { id: 6, title: "Clothes", amount: 25.8, date: new Date(2024, 0, 10) },
];

function App() {
  const [expenses, setExpenses] = useState(dummyExpenses);

  const getExpenseDataHandler = (data) => {
    setExpenses((prevState) => {
      return [data, ...prevState];
    });
  };
  return (
    <div className="App">
      <h1>Expense Tracker</h1>
      <NewExpense onGetExpenseData={getExpenseDataHandler} />
      <Expenses expenses={expenses} />
    </div>
  );
}

export default App;
