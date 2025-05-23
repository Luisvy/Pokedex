import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import Home from "./Home";
import Pokedex from "./Pokedex";
import Search from "./Search";
import Pokemon from "./Pokemon";

// Barra de navegación
const NavigationBar = () => {
  return (
    <nav>
    {/* Barra por defecto hacia la página principal */}
      <Link to="/">Home</Link> 
      <Link to="/pokedex">Pokedex</Link>
      <Link to="/search">Search</Link>
    </nav>
  );
};
// App usando modulos importados arriba
const App = () => (
  <BrowserRouter>
    <NavigationBar />
    <div className="content">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pokedex" element={<Pokedex />} /> 
        <Route path="/search" element={<Search />} />
        <Route path="/pokemon" element={<Pokemon />} />
      </Routes>
    </div>
  </BrowserRouter>
);

export default App;