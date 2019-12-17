import React from 'react';
import './App.css';
import Main from './components/main';

function App() {
  return (
    <div className="App">
      <h1 data-test="Logo">Weather Monster</h1>
      <Main />
    </div>
  );
}

export default App;
