import React, { useState, useEffect } from "react";
// import { fetchPokemons } from "../../fetchMock";
import { List, Button, Skeleton } from "antd";
import { useHistory } from "react-router-dom";
import { useFilter } from "../../context/filter-context";
const baseUrl = "https://pokeapi.co/api/v2/";
const limit = 20;

const fetchPokemons = async (lastId, filter) => {
  if (filter) {
    const res = await fetch(`${baseUrl}type/${filter}`);
    return await res.json();
  } else {
    const res = await fetch(
      `${baseUrl}pokemon?limit=${limit}&offset=${lastId}`
    );
    return await res.json();
  }
};

export default function PokemonList() {
  const { filter } = useFilter();
  const { push } = useHistory();
  const [pokemons, setPokemons] = useState([]);
  const [lastId, setLastId] = useState(0);
  const [loading, setLoading] = useState(false);
  const [getMore, setGetMore] = useState(true);

  useEffect(() => {
    const run = async () => {
      setLoading(true);
      setPokemons(pokemons => [
        ...pokemons,
        ...[...new Array(limit)].map(() => ({ loading: true }))
      ]);
      try {
        const resJson = await fetchPokemons(lastId, filter);
        if (filter) {
          resJson.results = resJson.pokemon.map(pokemon => pokemon.pokemon);
        }
        if (lastId === 0) {
          setPokemons(resJson.results);
        } else {
          setPokemons(pokemons => [
            ...pokemons.slice(0, pokemons.length - limit),
            ...resJson.results
          ]);
        }
        if (!resJson.next) {
          setGetMore(false);
        }
      } catch (error) {}
      setLoading(false);
    };
    run();
  }, [setPokemons, setLoading, setGetMore, lastId, filter]);

  useEffect(() => {
    setLastId(0);
    setGetMore(true);
  }, [filter]);

  const onLoadMore = () => {
    setLastId(id => id + limit);
  };

  const loadMore =
    getMore && !loading ? (
      <div
        style={{
          textAlign: "center",
          marginTop: 12,
          height: 32,
          lineHeight: "32px"
        }}
      >
        <Button onClick={onLoadMore}>loading more</Button>
      </div>
    ) : null;
  return (
    <List
      className="demo-loadmore-list"
      loading={loading && lastId === 0}
      itemLayout="horizontal"
      loadMore={loadMore}
      dataSource={pokemons}
      grid={{
        column: 4,
        gutter: 16
      }}
      size="small"
      renderItem={item => (
        <List.Item
          onClick={() => push(`/pokemon/${item.name}`, { url: item.url })}
          style={{
            background: "#fff",
            border: "1px solid gray",
            textAlign: "center",
            cursor: "pointer"
          }}
        >
          <Skeleton
            paragraph={{ rows: 1 }}
            title={false}
            loading={item.loading}
            active
          >
            <div>{item.name}</div>
          </Skeleton>
        </List.Item>
      )}
    />
  );
}
