import React from 'react';

const UserProfile = ({ user, onClose }) => {
  return (
    <div className="user-profile">
      <button onClick={onClose}>Close</button>
      <h2>User Profile</h2>
      <p><strong>Name:</strong> {user.name}</p>
      <p><strong>Email:</strong> {user.email}</p>
      <p><strong>Bio:</strong> {user.bio}</p>
    </div>
  );
};

export default UserProfile;





















































































































/*// src/Navbar.js
import React, { useState } from 'react';
import { FaUser } from 'react-icons/fa';
import UserProfile from './UserProfile';

const Navbar = () => {
  const [showProfile, setShowProfile] = useState(false);
  
  const user = {
    name: 'John Doe',
    email: 'john.doe@example.com',
    bio: 'A brief bio about John Doe.'
  };

  return (
    <nav>
      <div className="navbar">
        <h1>My App</h1>
       
        </button>
      </div>
      
        </div>
      )}
    </nav>
  );
};

export default Navbar;
/* src/App.css */
/*.navbar {
    display: flex;
    justify-content: space-between;
    padding: 20px;
    background: #007bff;
    color: white;
  }
  
  .profile-modal {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  .user-profile {
    background: white;
    padding: 20px;
    border-radius: 5px;
  }
  
*/