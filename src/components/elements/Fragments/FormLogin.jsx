import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';

import Button from 'react-bootstrap/Button';

const FormLogin = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if(username === 'nopal' && password === '123') {
      navigate('/dashboard');
    } else {
      console.error('Login Gagal');
    }

    console.log('Username', username);
    console.log('Password', password);
  };

  return(
    <form className="user" onSubmit={handleSubmit}>
      <div className="form-group">
        <input type="text" className="form-control form-control-user py-4 rounded-pill" id="username" placeholder="Enter Your Username" value={username} onChange={handleUsernameChange} autoComplete="off" autoFocus />
      </div>

      <div className="form-group">
        <input type="password" className="form-control form-control-user py-4 rounded-pill" id="password" value={password} onChange={handlePasswordChange} placeholder="Enter Your Password" />
      </div>

      <Button type="submit" variant="primary" size="lg" className="btn-block rounded-pill py-2 text-white">
        Submit
      </Button>
    </form>
  );
}

export default FormLogin;