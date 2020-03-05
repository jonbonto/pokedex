import React, { useState, useEffect } from "react";
import { fetchPokemons } from "./fetchMock";
import { List, Button, Skeleton, Col } from "antd";
import { useHistory } from "react-router-dom";
const baseUrl = "https://pokeapi.co/api/v2/";
const limit = 20;

export default function PokemonList() {
  const { push } = useHistory();
  const [pokemons, setPokemons] = useState([]);
  const [lastId, setLastId] = useState(0);
  const [loading, setLoading] = useState(false);
  const [getMore, setGetMore] = useState(true);

  useEffect(() => {
    const run = async () => {
      setLoading(true);
      setPokemons([
        ...pokemons,
        ...[...new Array(limit)].map(() => ({ loading: true }))
      ]);
      try {
        // const res = await fetch(`${baseUrl}pokemon?limit=${limit}&offset=${lastId}`)
        // const resJson = await res.json();
        const resJson = await fetchPokemons(lastId);
        setPokemons([...pokemons, ...resJson.results]);
        if (!resJson.next) {
          setGetMore(false);
        }
      } catch (error) {}
      setLoading(false);
    };
    run();
  }, [setPokemons, setLoading, setGetMore, lastId]);

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
            style={{ background: '#fff', border: '1px solid gray'}}
          >
            <Skeleton paragraph={{ rows: 1 }} title={false} loading={item.loading} active >
              <div>{item.name}</div>
            </Skeleton>
          </List.Item>
      )}
    />
  );
}
