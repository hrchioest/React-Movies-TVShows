import React from "react";
import Header from "./sections/Header";
import Home from "./sections/Home";
import Movies from "./sections/Movies";
import Temporadas from "./sections/Temporadas";
import Videos from "./sections/Videos";
import {
  HashRouter
} from 'react-router-dom';
import "./App.scss";

function App() {
  return (
    <div className='App'>
      <Header />
      <Home />
      <Movies />
      <Temporadas />
      <Videos />
    </div>
  );
}

export default App;

/*
import Movies from "./sections/Movies";
import Temporadas from "./sections/Temporadas";
import Videos from "./sections/Videos";
*/
