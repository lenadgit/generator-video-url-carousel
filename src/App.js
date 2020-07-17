import React from 'react';
import logo from './logo.svg';
import './App.css';
import InputComponent from './components/input/InputComponent';

function App() {
  return (
    <div className="App">
      <div className = "LeftColumn">
        <InputComponent />
      </div>
      <div className = "RightColumn">222</div>

    </div>
  );
}

export default App;
