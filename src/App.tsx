import React, {useEffect} from 'react';
import logo from './logo.svg';
import './App.css';
import {Assets} from "pixi.js";

function App() {

  useEffect(() => {
    Assets.load('bunny.png');
  }, [])

  return (
    <div className="App">
    </div>
  );
}

export default App;
