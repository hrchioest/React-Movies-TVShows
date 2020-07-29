import React from "react";
import "./App.scss";
import Header from "./sections/Header";
import Home from "./sections/Home";
import "./App.css";
import Movies from "./sections/Movies";
import Temporadas from "./sections/Temporadas";
import Videos from "./sections/Videos";

function App() {
  return (
    <div className='App'>
      <Header/>
      <Home />
      <Movies />
      <Temporadas />
      <Videos />
    </div>
  );
}

export default App;
