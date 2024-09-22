import React from "react";
import "./Signup.css";
import { useState} from "react";
import { useNavigate ,Link} from "react-router-dom";
import axios from "axios";


 function Signup  ()  {
  const navigate = useNavigate();


  const [username, setUsername] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [password, setPassword] = useState("");
  const [Confirmpassword, setConfirmPassword] = useState("");
  const [error, setError] = useState(null);
  const [message, setMessage] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post('http://localhost:3001/signup', {
        username,
        email,
        password,
      });
      alert(response.data.message);
      setMessage(response.data.message);
      navigate('/')
      setError(null); 
    } catch (error) {
      alert('Error during signup.');
      setError('Error during signup.');
      setMessage(null); 
    }
  };

  return (
    <div >
      <div className="container">
        <div className="header">
          <div className="text">Sign up with us</div>
          <div className="underline"></div>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="inputs">
            <div className="input">
              <input
                type="text"
                placeholder="Name"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </div>
          </div>
          <div className="inputs">
            <div className="input">
              <input
                type="text"
                placeholder="Last Name"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                required
              />
            </div>
          </div>
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
                type="text"
                placeholder="Address"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
               
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
          <div className="inputs">
            <div className="input">
              <input
                type="password"
                placeholder=" Confirm Password"
                value={Confirmpassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
              />
            </div>
          </div>

          <div className="submit-container">
            <div className="submit">
              <button type="submit">Sign up</button>
            </div>
          </div>
        </form>
        <div className="login-link">
        <p>Already have an account with us <Link to="/Login">Login</Link></p>
       
        </div>
        <p>By Creating an account with us you agree to the<Link to="/terms-and-conditions">Terms</Link> and <Link to="/privacy-policy">Privacy Policy</Link> of our company</p>
        
        {error && <div className="error">{error}</div>}
        {message && <div className="message">{message}</div>}
      </div>
     
    </div>
  );
};

export default Signup