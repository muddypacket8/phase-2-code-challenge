import React, { useState, useEffect } from 'react';
import './App.css';

function TransactionsTable() {
  const [transactions, setTransactions] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [newTransaction, setNewTransaction] = useState({
    date: '',
    description: '',
    amount: ''
  });

  useEffect(() => {
    fetch('https://react-40re.onrender.com/transactions')
      .then((r) => r.json())
      .then((transactions) => setTransactions(transactions));
  }, []);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setNewTransaction((prevState) => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    fetch('https://react-40re.onrender.com/transactions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newTransaction)
    })
      .then((r) => r.json())
      .then((newTransaction) => {
        setTransactions((prevState) => [...prevState, newTransaction]);
        setNewTransaction({
          date: '',
          description: '',
          amount: '',
        });
      });
  };

  return (
    <>
      <form onSubmit={handleFormSubmit}>
        <input
          type="date"
          name="date"
          value={newTransaction.date}
          onChange={handleInputChange}
          required
        />
        <input
          type="text"
          name="description"
          value={newTransaction.description}
          onChange={handleInputChange}
          required
        />
        <input
          type="number"
          name="amount"
          value={newTransaction.amount}
          onChange={handleInputChange}
          required
        />
        <button type="submit">Add transaction</button>
      </form>
      <table>
        <thead>
          <tr>
            <th>Date</th>
            <th>Description</th>
            <th>Amount</th>
          </tr>
        </thead>
        <tbody>
          {transactions &&
            transactions.map((transaction, index) => (
              <tr key={index}>
                <td>{transaction.date}</td>
                <td>{transaction.description}</td>
                <td>{transaction.amount}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </>
  );
}

export default TransactionsTable;
