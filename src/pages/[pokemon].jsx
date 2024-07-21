"use client";

import "../app/globals.css";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import Pokedex from "pokedex-promise-v2";
import Image from "next/image";

const typeColors = {
  normal: "bg-gray-400",
  fire: "bg-red-500",
  water: "bg-blue-500",
  electric: "bg-yellow-500",
  grass: "bg-green-500",
  ice: "bg-blue-200",
  fighting: "bg-red-700",
  poison: "bg-purple-500",
  ground: "bg-yellow-700",
  flying: "bg-blue-300",
  psychic: "bg-pink-500",
  bug: "bg-green-700",
  rock: "bg-gray-700",
  ghost: "bg-purple-700",
  dragon: "bg-purple-900",
  dark: "bg-gray-800",
  steel: "bg-gray-500",
  fairy: "bg-pink-300",
};

const Pokemon = () => {
  const router = useRouter();
  const pokedex = new Pokedex();
  const [pokemon, setPokemon] = useState({});

  useEffect(() => {
    if (router.isReady) {
      const name = router.query.pokemon;

      pokedex
        .getPokemonByName(name.toString())
        .then((res) => {
          setPokemon(res);
        })
        .catch((err) => console.log(err));
    }
  }, [router.isReady]);

  return (
    <>
      <div className="w-full h-screen absolute z-[-1]">
        <Image
          src="/pokedex.jpg"
          alt="Pokedex Detail Background"
          fill
          className="rounded-lg object-cover"
          priority
        />
      </div>
      <div className="min-h-screen w-full grid place-items-center">
        <div className="lg:w-[500px] mx-auto bg-white p-10 rounded-lg xs:w-[80dvw]">
          <Image
            className="mx-auto"
            src={pokemon.sprites?.front_default}
            width={200}
            height={200}
            alt={pokemon.name}
          />
          <h1 className="text-center capitalize text-3xl pt-2 pb-4">
            {pokemon.name}
          </h1>

          <div className="flex flex-col items-center gap-6 mt-8">
            <div className="flex items-center gap-4">
              <h2 className="text-lg">Type:</h2>
              {pokemon.types?.map((t) => (
                <span
                  key={t.type.name}
                  className={`${
                    typeColors[t.type.name]
                  } text-white py-[2px] px-2 rounded`}
                >
                  {t.type.name}
                </span>
              ))}
            </div>

            <div className="flex items-center gap-4">
              <h2 className="text-lg">Abilities:</h2>
              {pokemon.abilities?.map((a) => (
                <span key={a.ability.name} className="ability">
                  {a.ability.name}
                </span>
              ))}
            </div>

            <div>Weight: {pokemon.weight} pounds</div>
            <div>Height: {pokemon.height} feet</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Pokemon;
