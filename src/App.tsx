import React from 'react';
import logo from './logo.svg';
import './App.css';
import { useSelector } from 'react-redux';
import { MyRouter } from './component/MyRouter';

function App() {
  // const data = useSelector((state) => state);
  // console.log(data);

  return (
    <div className="App">
      <MyRouter></MyRouter>
    </div>
  );
}

export default App;
