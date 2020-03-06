import React from "react";
import Filter from "./Filter";
import { Typography } from "antd";
import { useFilter } from "../../context/filter-context";

const { Title } = Typography;

export default function Header() {
  const {filter} = useFilter()
  const title = filter ? `Pokemons with type: ${filter}` : "All Pokemons"
  return (
    <div style={{ display: "flex", justifyContent: "space-between", alignItems: 'flex-start' }}>
      <Title level={3}>{title}</Title>
      <Filter />
    </div>
  );
}
