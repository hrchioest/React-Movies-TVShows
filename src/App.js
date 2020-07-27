


import React from 'react';
import './App.scss';
import Header from "./Sections/Header";
import Home from "./Sections/Home";
import './App.css';
import Movies from './Sections/Movies';
import Temporadas from "./sections/Temporadas";
import Videos from "./sections/Videos";


function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <Movies />
      <Temporadas />
      <Videos />
    </div>
  );
}

export default App;
