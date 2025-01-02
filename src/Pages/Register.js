
import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';


function Register() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLogin, setIsLogin] = useState(true);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(''); // Clear any previous errors

    if (isLogin) {
      // Login validation
      if (email.trim() === '' || password.trim() === '') {
        setError('Email and password are required');
        return;
      }
    } else {
      // Signup validation
      if (username.trim() === '' || email.trim() === '' || password.trim() === '') {
        setError('Username, email, and password are required');
        return;
      }
    }

    const url = isLogin ? 'http://localhost:3000/store' : 'http://localhost:3000/Register';
    const data = isLogin ? { email, password } : { username, email, password };

    try {
      const response = await axios.post(url, data);
      if (isLogin) {
        localStorage.setItem('token', response.data.token);
        alert('Login successful');
        navigate('/home'); // Navigate to home page after login
      } else {
        alert('User created successfully');
        setIsLogin(true); // Switch to login after successful signup
        navigate('/login'); // Navigate to login page after signup
      }
    } catch (error) {
      setError(error.response?.data?.message || 'An error occurred');
    }
  };

  return (
    <div className="reg-background">
      <div className="reg-container">
        <h2>{isLogin ? 'Login' : 'Signup'}</h2>
        {error && <div className="error-message">{error}</div>}
        <form onSubmit={handleSubmit}>
          {!isLogin && (
            <div>
              <label>Username:</label>
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required={!isLogin}
              />
            </div>
          )}
          <div>
            <label>Email:</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div>
            <label>Password:</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit">{isLogin ? 'Login' : 'Dont have an account? Signup'}</button>
        </form>
        <button onClick={() => setIsLogin(!isLogin)}>
          {isLogin ? "Dont have an account?  Signup"   : ' Login'}
        </button>

      </div>
    </div>
  );
}

export default Register;