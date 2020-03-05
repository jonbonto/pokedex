import React, { useEffect, useState } from "react";
import { fetchPokemon } from "../../fetchMock";
import { useParams, useLocation } from "react-router-dom";
import Info from "./Info";
import Abilities from "./Abilities";
import Forms from "./Forms";
import Stats from "./Stats";
import Sprites from "./Sprites";
import { Row, Col } from "antd";

export default function Pokemon() {
  const { name } = useParams();
  const { state } = useLocation();
  const url = state?.url ?? `https://pokeapi.co/api/v2/pokemon/${name}`;
  const [pokemon, setPokemon] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const run = async () => {
      setLoading(true);
      try {
        // const res = await fetch(url)
        // const resJson = await res.json();
        const resJson = await fetchPokemon(url);
        setPokemon(resJson);
      } catch (error) {}
      setLoading(false);
    };
    run();
  }, [setPokemon, setLoading, url]);

  return (
    <>
      <Row gutter={[16, 16]}>
        <Col md={16}>
          <Sprites sprites={pokemon.sprites} />
        </Col>
        <Col md={8}>
          <Info {...{ ...pokemon, baseExperience: pokemon.base_experience }} />
        </Col>
      </Row>
      <Row gutter={[16, 16]}>
        <Col md={12}>
          <Abilities abilities={pokemon.abilities} />
        </Col>
        <Col md={12}>
          <Forms forms={pokemon.forms} />
        </Col>
      </Row>
      <Row gutter={[16, 16]}>
        <Col md={12}>
          <Stats stats={pokemon.stats} />
        </Col>
      </Row>
    </>
  );
}
