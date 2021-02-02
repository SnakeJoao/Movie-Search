/* eslint-disable no-console */
import React, { useState, useEffect } from 'react';
import Search from '../Search';
import Results from '../Results/index';

import api from '../../services/api';

export default function Container() {
  const [state, setState] = useState({
    searchQuery: '',
    results: [],
    selected: {},
  });

  async function getData() {
    try {
      const response = await api.get(
        `/discover/movie?language=pt-BR&api_key=${process.env.REACT_APP_KEY}`
      );

      const { results } = response.data;
      setState(prevState => {
        return {
          ...prevState,
          results,
        };
      });
    } catch (err) {
      console.log(err);
    }
  }
  useEffect(() => {
    getData();
  }, []);

  async function searchHandler(event) {
    try {
      if (event.key === 'Enter') {
        if (!state.searchQuery) {
          getData();
        } else {
          const response = await api.get(
            `/search/multi?language=pt-BR&query=${state.searchQuery}&api_key=${process.env.REACT_APP_KEY}`
          );

          const { results } = response.data;
          setState(prevState => {
            return {
              ...prevState,
              results,
            };
          });
        }
      }
    } catch (err) {
      console.log(err);
    }
  }

  const inputHandler = event => {
    event.preventDefault();
    const input = event.target.value;
    setState(prevState => {
      return {
        ...prevState,
        searchQuery: input,
      };
    });
  };

  return (
    <div className="App">
      <header>
        <h1>Denox Filmes :)</h1>
        <br />
        <h4>Busque por seus filmes, séries e celebridades favoritas</h4>
        <br />
      </header>
      <main>
        <Search
          inputTerm={state.searchQuery}
          handleTheInput={inputHandler}
          handleTheSearch={searchHandler}
        />
        <Results results={state.results} />
      </main>
    </div>
  );
}
