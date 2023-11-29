import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { registerUser } from '../../redux/auth/authSlice';

const RegisterForm = () => {
  const dispatch = useDispatch();
  const [userData, setUserData] = useState({ username: '', email: '', password: '' });

  const handleRegister = () => {
    dispatch(registerUser(userData));
  };

  return (
    <div>
      <h2>Register</h2>
      <form>
        <label>Username:</label>
        <input
          type="text"
          value={userData.username}
          onChange={(e) => setUserData({ ...userData, username: e.target.value })}
        />
        <br />
        <label>Email:</label>
        <input
          type="email"
          value={userData.email}
          onChange={(e) => setUserData({ ...userData, email: e.target.value })}
        />
        <br />
        <label>Password:</label>
        <input
          type="password"
          value={userData.password}
          onChange={(e) => setUserData({ ...userData, password: e.target.value })}
        />
        <br />
        <button type="button" onClick={handleRegister}>
          Register
        </button>
      </form>
    </div>
  );
};

export default RegisterForm;
