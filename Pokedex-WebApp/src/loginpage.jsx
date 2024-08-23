import React from "react";

function LoginPage() {
  // Define styles
  const pageStyle = {
    backgroundColor: 'red',
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 0,
  };

  const boxStyle = {
    backgroundColor: 'white',
    borderRadius: '15px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    padding: '40px', // Increased padding
    width: '400px', // Increased width
    opacity: 0.8,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '20px', // Increased gap
  };

  const inputStyle = {
    padding: '10px',
    borderRadius: '5px',
    border: '1px solid #ccc',
    width: '100%', // Full width of the box
    boxSizing: 'border-box', // Ensures padding is included in width
  };

  const buttonStyle = {
    padding: '10px',
    borderRadius: '5px',
    border: 'none',
    backgroundColor: '#007bff',
    color: 'white',
    fontSize: '16px',
    cursor: 'pointer',
    width: '100%', // Full width of the box
  };

  return (
    <div style={pageStyle}>
      <div style={boxStyle}>
        <h2>Login</h2>
        <input type="text" placeholder="Username" style={inputStyle} />
        <input type="passwcord" placeholder="Password" style={inputStyle} />
        <button type="submit" style={buttonStyle}>Login</button>
        <a href="#">New User?</a>
      </div>
    </div>
  );
}

export default LoginPage;
