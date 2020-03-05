import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import "./App.css";
import PokemonList from "./PokemonList";
import Pokemon from "./components/pokemon";
import { Layout } from "antd";

const { Header, Content, Footer } = Layout;

function App() {
  return (
    <Router>
      <Layout>
        <Header />
        <Layout>
          <Content style={{ padding: '0 50px', marginTop: 64 }}>
            <Switch>
              <Route path="/pokemon/:name">
                <Pokemon />
              </Route>
              <Route path="/">
                <PokemonList />
              </Route>
            </Switch>
          </Content>
        </Layout>
        <Footer style={{ textAlign: 'center' }}>2020</Footer>
      </Layout>
    </Router>
  );
}

export default App;
