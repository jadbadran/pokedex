// pages/api/pokemon.ts
import type { NextApiRequest, NextApiResponse } from "next";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=151");
  const data = await response.json();

  // Fetch detailed information for each Pokémon
  const detailedPokemonPromises = data.results.map(async (pokemon: any) => {
    const detailsResponse = await fetch(pokemon.url);
    const details = await detailsResponse.json();
    return {
      id: details.id,
      name: details.name,
      types: details.types.map((typeInfo: any) => typeInfo.type.name),
      image: details.sprites.front_default,
    };
  });

  const detailedPokemons = await Promise.all(detailedPokemonPromises);
  res.status(200).json(detailedPokemons);
};
