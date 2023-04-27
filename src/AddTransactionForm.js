import React, { useState } from "react";

function AddTransactionForm({ onAddTransaction }) {
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [amount, setAmount] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    const newTransaction = {
      description,
      category,
      amount,
      date: new Date().toLocaleDateString(),
    };
    onAddTransaction(newTransaction);
    setDescription("");
    setCategory("");
    setAmount("");
  };

  return (
    <div className="add-transaction-form">
      <h2>Add a New Transaction</h2>
    </div>
  );
}

export default AddTransactionForm;
