import { atom } from "recoil";

export const searchState = atom({
  key: "searchState",
  default: false,
});

export const pokemonListState = atom({
  key: "pokemonListState",
  default: [],
});
