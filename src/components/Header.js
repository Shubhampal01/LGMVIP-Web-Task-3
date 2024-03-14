import React from 'react'

const headerStyle = {
    textAlign: 'center',
    padding: '20px',
    background: '#4CAF50',
    color: 'white',
    marginBottom: '20px'
  };
export default function Header() {
  return (
    <header style={headerStyle}>
      <h1>Student Registration</h1>
      <p>Complete the form below to register as a student.</p>
    </header>
  )
}
