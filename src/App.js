import React, { useState } from 'react'
import logo from './logo.svg';
import './App.css';


function App() {
  const [name, setName] = useState('')
  const [password, setPassword] = useState('')
  const onSubmit = () => {
    console.log('clicked')
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username: name, password })
    };

    fetch('http://localhost:3000/login', requestOptions)
      .then(response => response.json())
      .then(data => console.log('data: ', data))
  }
  return (
    <div className="App">
      <input placeholder={'username'} onChange={e => setName(e.target.value)}/>
      <input placeholder='password' onChange={e => setPassword(e.target.value)}/>
      <button onClick={onSubmit}>Submit 3-</button>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
