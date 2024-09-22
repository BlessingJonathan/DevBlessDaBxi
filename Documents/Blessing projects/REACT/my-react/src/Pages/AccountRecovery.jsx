import React, { useState } from 'react';
import axios from 'axios';
import { Link, } from 'react-router-dom';
import './AccountRecovery.css'; // Make sure to create this CSS file for styling

function AccountRecovery() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
 

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3001/recover', { email });
      setMessage(response.data.message);
      setError('');
    } catch (error) {
      setMessage('');
      setError(error.response?.data?.message || 'An error occurred while recovering the account');
    }
  };

  return (
    <div className="account-recovery-container">
      <div className="header">
        <h2>Account Recovery</h2>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="input-group">
          <label htmlFor="email">Enter your email address:</label>
          <input
            type="email"
            id="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <button type="submit">Send Recovery Email</button>
      </form>
      {message && <div className="message">{message}</div>}
      {error && <div className="error">{error}</div>}
      <div className="back-link">
        <Link to="/">Back to Login</Link>
      </div>
    </div>
  );
}

export default AccountRecovery;

