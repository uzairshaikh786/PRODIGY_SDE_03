import React, { useState } from 'react';

function Login({ onLogin }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Simulate a successful login with a specific username and password
    const fakeUsername = 'testuser';
    const fakePassword = 'password';
  
    if (username === fakeUsername && password === fakePassword) {
      // If the entered username and password match, call the onLogin function
      onLogin({ username });
  
      // Set a flag in local storage to indicate that the user is logged in
      localStorage.setItem('isLoggedIn', 'true');
    } else {
      // Handle invalid login here, e.g., display an error message.
      alert('Invalid login. Please check your credentials.');
    }
  };
  

  return (
    <div style={{marginleft: "auto", marginright : "auto", width: "50%",padding: "10px"}}>
      <h2>Login</h2>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        style={{margin: "10px"}}
      />
      <button onClick={handleLogin} style={{margin: "10px"}}>Login</button>
    </div>
  );
}

export default Login;
