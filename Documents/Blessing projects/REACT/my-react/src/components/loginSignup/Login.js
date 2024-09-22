import React, { useState } from 'react';
import './Login.css';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate(); 

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3001/login', {
        email:{setEmail},
        password:{setPassword}
      });

      if (response.data.message === 'Login successful') {
        navigate('/'); 
      } else {
        setError('Login failed');
      }
    } catch (error) {
      console.error("Error during log in:", error);
      setError(error.response?.data?.message || "An error occurred during log in");
    }
  };
  return (
    <div className="login-background">
      <div className="container">
        <div className="header">
          <div className="text">Sign in with us</div>
          <div className="underline"></div>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="inputs">
            <div className="input">
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
          </div>
          <div className="inputs">
            <div className="input">
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
          </div>
          <div className="submit-container">
            <div className="submit">
              <button type="submit">Login</button>
            </div>
          </div>
        </form>
        <div className='Recovery'>
          <Link to='/Account_Recovery'>Forgot your password?</Link>
        </div>
        <div className="signup-link">
        <p>Don't have an account? <Link to="/Signup">Sign up</Link></p>
      </div>
        {error && <div className="error">{error}</div>}
      </div>
     
    </div>
  );
}

export default Login;
