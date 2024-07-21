"use client";

import "../app/globals.css";
import React, { useEffect } from "react";
import { useRecoilState, useSetRecoilState } from "recoil";
import { searchState, pokemonListState } from "../atoms/SearchAtom";

const FirstPage = () => {
  const [isPopupOpen, setIsPopupOpen] = useRecoilState(searchState);
  const setPokemonList = useSetRecoilState(pokemonListState);

  const togglePopup = () => {
    document.body.style.overflowY = "hidden";
    setIsPopupOpen(true);
    console.log("toggling popup...");
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/api/pokemon");
        const data = await response.json();
        setPokemonList(data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, [setPokemonList]);

  return (
    <div className="h-[85vh] w-full flex flex-col justify-evenly items-center text-center bg-yellow-400">
      <h1 className="text-2xl text-white px-5">
        Hi! Explore any Pokemon You Want To Know More About!
      </h1>
      <div className="h-[125px] w-[125px] bg-custom-gradient border-4 border-solid border-black rounded-full relative animate-anim">
        <div className="before:absolute before:content-[''] before:h-1 before:w-[118.5px] before:bg-black before:top-[50%] before:left-[50%] before:translate-x-[-50%] before:translate-y-[-50%] after:absolute after:content-[''] after:h-[38px] after:w-[38px] after:top-[50%] after:left-[50%] after:transform after:translate-x-[-50%] after:translate-y-[-50%] after:bg-white after:border-solid after:border-[1px] after:rounded-full after:shadow-[inset_0_0_0_8px_black,inset_0_0_0_10px_white,inset_0_0_0_12px_black]"></div>
      </div>
      <button
        onClick={togglePopup}
        className="px-8 z-30 py-4 bg-rose-400 rounded-md text-white relative font-semibold font-sans after:-z-20 after:absolute after:h-1 after:w-1 after:bg-rose-800 after:left-5 overflow-hidden after:bottom-0 after:translate-y-full after:rounded-md after:hover:scale-[300] after:hover:transition-all after:hover:duration-700 after:transition-all after:duration-700 transition-all duration-700 [text-shadow:3px_5px_2px_#be123c;] hover:[text-shadow:2px_2px_2px_#fda4af] text-2xl"
      >
        GO!
      </button>
    </div>
  );
};

export default FirstPage;
