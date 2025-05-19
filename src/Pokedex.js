import React, { useState, useEffect } from "react";
import PokemonCard from "./PokemonCard";
// Importamos modulos de React en una sola linea.

//Creamos el componente
const Pokedex = () => {
    // Utilización del modulo useState para registrar el estado de nuestra request
  const [pokemons, setPokemons] = useState([]);
    // Se usa la función fetch con la API de preferencia para obtener la data de forma asíncrona para mejor visualización
  const fetchPokemons = async () => {
    fetch("https://pokedex.mimo.dev/api/pokemon")
      .then((response) => response.json())
      .then((data) => setPokemons(data));
  };
  //Utilización del modulo useEffect para almacenar la data en un array. 
  useEffect(() => {
    fetchPokemons();
  }, []);

  //Mostramos la data obtenida con estilo llamando al componente PokemonCard
  return (
    <>
      <h1>All of now existing Pokemon's</h1>
      <ul>
        {pokemons.map((pokemon, index) => (
          <PokemonCard key={index} pokemon={pokemon} />
        ))}
      </ul>
    </>
  );
};

//Exportamos el componente para poder ser usado en otras áreas.
export default Pokedex;