import React from 'react';
import './App.scss';
import Header from "./Sections/Header";
import Home from "./Sections/Home";
import './App.css';
import Movies from './Sections/Movies';


function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <Movies></Movies>
    </div>
  );
}

export default App;
