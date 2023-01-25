import React from 'react';
import logo from './logo.svg';
import './App.css';
import ToggleBackground from './Button';

function App() {

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p className='App-text'>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <ToggleBackground/>
   
      </header>
    </div>
  
  );
 
}

export default App;
