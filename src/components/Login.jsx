
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';

function Login() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();
 

  const handleLogin = async (e) => {
    e.preventDefault();

    const response = await fetch('http://localhost:5004/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username, email })
    });

    const data = await response.json();

    if (response.ok) {
      localStorage.setItem('role', data.role);

      console.log(data.role);

      if (data.role === 'student') {
        navigate('/student/Sdashboard');
      } else if (data.role === 'faculty') {
        navigate('/faculty/Fdashboard');
      } else if (data.role === 'admin') {
        navigate('/admin/Adashboard');
      }
    } else {
      setMessage(data.message || "Login failed");
    }
  };

  return (
    <div>
      <div className='container'>
        <form onSubmit={handleLogin}>
          <label>
            Username:  
            <input 
              type='text' 
              value={username}
              onChange={(e) => setUsername(e.target.value)} 
            />
          </label>
          <label>
            Email: 
            <input 
              type='email' 
              value={email}
              onChange={(e) => setEmail(e.target.value)} 
            />
          </label>
          <button type="submit">Login</button>
        </form>
        {message && <p>{message}</p>}
      </div>      
    </div>
  );
}

export default Login;
