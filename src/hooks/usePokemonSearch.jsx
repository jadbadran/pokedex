import { useState, useEffect, useRef } from "react";

const usePokemonSearch = (allPokemonList) => {
  const [searchedPokemons, setSearchedPokemons] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  let timeOutId = useRef(null);

  useEffect(() => {
    if (allPokemonList.length > 0) {
      setSearchedPokemons(allPokemonList);
      setIsLoading(false);
    }
  }, [allPokemonList]);

  const searchPokemon = (target) => {
    if (target.trim().length === 0) {
      setSearchedPokemons(allPokemonList);
      return;
    }

    const matchedPokemons = allPokemonList.filter((pokemon) =>
      pokemon.name.toLowerCase().includes(target)
    );

    console.log("matched: ", matchedPokemons);
    setSearchedPokemons(matchedPokemons);
  };

  const onChange = (e) => {
    const target = e.target.value.toLowerCase();

    if (timeOutId.current) {
      clearTimeout(timeOutId.current);
    }

    timeOutId.current = setTimeout(() => {
      searchPokemon(target);
      timeOutId.current = null;
    }, 500);
  };

  return { searchedPokemons, isLoading, onChange };
};

export default usePokemonSearch;
