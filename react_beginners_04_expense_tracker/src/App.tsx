import React, { useState } from "react";
import ExpenseList from "./components/ExpenseList";
import ExpenseFilter from "./components/ExpenseFilter";
import ExpenseForm from "./components/ExpenseForm";
import "./index.css";
import categories from "../categories";
import styled from "styled-components";

function App() {
  const [selectedCategory, setSelectedCategory] = useState("");

  const [expenses, setExpenses] = useState([
    {
      id: 1,
      description: "Electricity Bill",
      cost: 23,
      category: "Utilities",
    },
    {
      id: 2,
      description: "Birthday dinner items",
      cost: 14,
      category: "Groceries",
    },
    {
      id: 3,
      description: "Movie tickets",
      cost: 40,
      category: "Entertainment",
    },
    {
      id: 4,
      description: "Mother's Day gift",
      cost: 120,
      category: "Other",
    },
  ]);

  const visibleExpenses = selectedCategory
    ? // if user has selected a category, return that category, otherwise return all
      expenses.filter((e) => e.category === selectedCategory)
    : expenses;

  return (
    <>
      <div className="main_title">Expense Tracker</div>
      <div className="container">
        <div>
          <div className="heading_name">Add an Expense</div>
          <ExpenseForm
            onSubmit={(newExpense) =>
              setExpenses([
                ...expenses,
                { ...newExpense, id: expenses.length + 1 },
              ])
            }
          />
          <div className="heading_name">Current Expenses</div>
          <ExpenseFilter
            onSelectCategory={(category) => setSelectedCategory(category)}
          />
          <ExpenseList
            // filter and show only expenses that have not been deleted
            expenses={visibleExpenses}
            onDelete={(id) => setExpenses(expenses.filter((e) => e.id !== id))}
          />
        </div>
        ;
      </div>
    </>
  );
}

export default App;
