"use client";
import { useEffect, useState } from 'react';

export default function Pokemon() {
  const [pokemon, setPokemon] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch('/api/pokemon');
      const data = await response.json();
      setPokemon(data.results);
    }
    fetchData();
  }, []);

  return (
    <div>
      <h1 className="text-3xl font-bold underline">Pokémon List</h1>
      <ul>
        {pokemon.map((p: any, index: number) => (
          <li key={index}>{p.name}</li>
        ))}
      </ul>
    </div>
  );
}
