// Modulos a usar importados
import React, { useState, useEffect } from "react";
import { useLocation } from "react-router";
//Creación del componente, utilizando modulos.
const Pokemon = () => {
    //Creamos el modulo de control de estado
  const [pokemon, setPokemon] = useState(null);
    //Modulo de carga al seleccionar
  const [loading, setLoading] = useState(true);
    // Modulo de error.
  const [error, setError] = useState(null);
    // Variable para preguntar a la API con el modulo useLocation
  const query = new URLSearchParams(useLocation().search);
    // Almacenamos la data de la query en variable.
  const pokemonName = query.get("name");


  useEffect(() => {
    const fetchPokemon = async () => {
      if (!pokemonName) return;

        //Si el nombre del Pokemon existe, obtenemos los parámetros y de no existir, se muestra un error.
      try {
        const response = await fetch(
          `https://pokedex.mimo.dev/api/pokemon/${pokemonName}`,
        );
        if (!response.ok) throw new Error("Pokémon not found");
        // creamos variable data para guardar la respuesta de la API de forma asíncrona.
        const data = await response.json();
        setPokemon(data);
        setError(null);
      } catch (err) {
        setPokemon(null);
        setError(err.message);
        //Cuando toda la data está cargada, finalizamos el modo Loading
      } finally {
        setLoading(false);
      }
    };

    fetchPokemon();
  }, [pokemonName]);


  //Mostramos el contenido al solicitarse, en este caso con un click 
  return (
    <>
      {loading && <p>Loading ..</p>}
      {error && <p>Error ..</p>}
      {pokemon && (
        <div>
          <h1>{pokemon.name}</h1>
          <img src={pokemon.sprites.front_default} alt={pokemon.name} />
          {pokemon.height && <p>Height: {pokemon.height}</p>}
          {pokemon.weight && <p>Weight: {pokemon.weight}</p>}
          {pokemon.abilities && (
            <p>
              <span>Abilities: </span>
              {pokemon.abilities.map((ability) => ability.ability.name).join(", ")}
            </p>
          )}
          {pokemon.types && (
            <p>
              <span>Types: </span>
              {pokemon.types.map((type) => type.type.name).join(", ")}
            </p>
          )}
        </div>
      )}
    </>
  );
};

export default Pokemon;
