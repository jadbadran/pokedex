"use client";

import "../app/globals.css";
import React, { useRef } from "react";
import { IoMdClose } from "react-icons/io";
import { useRecoilState, useRecoilValue } from "recoil";
import { searchState, pokemonListState } from "@/atoms/SearchAtom";
import Card from "./Card";
import usePokemonSearch from "@/hooks/usePokemonSearch";

const Search = () => {
  const searchInput = useRef(null);
  const [isPopupOpen, setIsPopupOpen] = useRecoilState(searchState);
  const allPokemonList = useRecoilValue(pokemonListState);
  const { searchedPokemons, isLoading, onChange } =
    usePokemonSearch(allPokemonList);

  const togglePopup = () => {
    document.body.style.overflowY = "visible";
    setIsPopupOpen(false);
  };

  return (
    <div className="bg-[#ececec] w-screen h-screen fixed top-0 left-0 z-50 overflow-auto p-4 flex justify-center">
      <div className="container">
        <div className="flex justify-between items-center py-8 border-b-[2px] border-red-500">
          <h2 className="text-red-500 text-4xl">Search Pokemon...</h2>
          <IoMdClose
            className="text-red-500 text-[36px] cursor-pointer mr-4"
            onClick={togglePopup}
          />
        </div>
        <div className="w-full h-[10vh] flex items-center">
          <input
            className="bg-white py-2 px-4 w-full flex justify-center md:w-[400px] w-[250px] rounded-full outline-none border-none top-24 z-20"
            type="text"
            onChange={onChange}
            ref={searchInput}
            placeholder="Search Your Pokemon!"
          />
        </div>
        {isLoading ? (
          <div className="text-center">
            <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin border-yellow-500 mx-auto"></div>
            <h2 className="text-zinc-900 mt-4">Loading...</h2>
            <p className="text-black">Sandshrew used Spinning...</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 mt-1">
            {searchedPokemons.map((pokemon) => (
              <Card
                key={pokemon.name}
                img={pokemon.image}
                name={pokemon.name}
                types={pokemon.types}
                onClick={togglePopup}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Search;
