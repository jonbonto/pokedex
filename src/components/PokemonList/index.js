import React from "react";
import { FilterProvider } from "../../context/filter-context";
import PokemonList from "./PokemonList";
import Header from "./Header";


export default function() {
  return (
    <FilterProvider>
      <Header />
      <PokemonList />
    </FilterProvider>
  );
}
