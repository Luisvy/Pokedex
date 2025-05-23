import React, { useState, useEffect } from "react";
import "./Search.css";
import PokemonCard from "./PokemonCard";


//Componente para la busqueda de un Pokemon específico usando modulos.
const Search = () => {
  const [pokemons, setPokemons] = useState([]);
  const [filteredPokemons, setFilteredPokemons] = useState([]);
  const [input, setInput] = useState("");

  const fetchPokemons = async () => {
    fetch("https://pokedex.mimo.dev/api/pokemon")
      .then((response) => response.json())
      .then((data) => setPokemons(data));
  };

  useEffect(() => {
    fetchPokemons();
  }, []);

  useEffect(() => {
    if (input === "") {
      setFilteredPokemons([]);
    } else {
      const filtered = pokemons.filter((pokemon) =>
        pokemon.name.toLowerCase().startsWith(input.toLowerCase()),
      );
      setFilteredPokemons(filtered);
    }
  }, [input, pokemons]);

  return (
    <>
      <h1>Search a Pokemon</h1>
      <input
        placeholder="Put the name here..."
        onChange={(e) => setInput(e.target.value)}
      />
      <ul>
        {filteredPokemons.map((pokemon) => (
          <PokemonCard key={pokemon.name} pokemon={pokemon} />
        ))}
      </ul>
    </>
  );
};

export default Search;