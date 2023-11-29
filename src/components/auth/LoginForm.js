import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { loginUser } from '../../redux/auth/authSlice';

const LoginForm = () => {
  const dispatch = useDispatch();
  const [loginData, setLoginData] = useState({ identifier: '', password: '' });

  const handleLogin = () => {
    dispatch(loginUser(loginData));
  };

  return (
    <div>
      <h2>Login</h2>
      <form>
        <label>Identifier (Username or Email):</label>
        <input
          type="text"
          value={loginData.identifier}
          onChange={(e) => setLoginData({ ...loginData, identifier: e.target.value })}
        />
        <br />
        <label>Password:</label>
        <input
          type="password"
          value={loginData.password}
          onChange={(e) => setLoginData({ ...loginData, password: e.target.value })}
        />
        <br />
        <button type="button" onClick={handleLogin}>
          Login
        </button>
      </form>
    </div>
  );
};

export default LoginForm;
