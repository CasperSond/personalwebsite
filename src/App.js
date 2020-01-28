import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Router, Link } from "@reach/router";
import Home from "./views/home";
import Other from "./views/other";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>Header</p>
      </header>
      <Router>
        <Home path="/" />
        <Other path="dashboard" />
      </Router>
    </div>
  );
}

export default App;
