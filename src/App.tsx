import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import Button from './components/Button/Button';
import InputField from './components/InputField/InputField';

function App() {
  return (
    <div className="App">
      <Header title={'My Test Title'} logo={logo}/>
      <InputField onChange={(value) => console.log(value)}/>
      <Button />
    </div>
  );
}

export default App;
