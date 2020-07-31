import React from 'react';
import logo from './logo.svg';
import './App.scss';
import InputComponent from './components/input/InputComponent';
import ReadyUrls from './components/input/ReadyUrlsComponent';

function App() {
  return (
    <div className="App">
      <div className = "LeftColumn">
        <InputComponent />
        <ReadyUrls />
      </div>
      <div className = "RightColumn">222</div>

    </div>
  );
}

export default App;
