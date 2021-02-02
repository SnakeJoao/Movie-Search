/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import api from '../../services/api';
import * as global from '../../global';
import noImg from '../../assets/noImg.png';

export default function MovieDetail({ match }) {
  const [movie, setMovie] = useState('');

  async function getData(id) {
    const response = await api.get(
      `/movie/${id}?language=pt-BR&api_key=${process.env.REACT_APP_KEY}`
    );

    const { data } = response;
    setMovie(data);
  }
  useEffect(() => {
    const data = match.params.id;
    getData(data);
  }, [match.params]);

  return (
    <section className="popup">
      <div className="content">
        <h2>{movie.title}</h2>
        <p>Avaliação: {movie.vote_average}</p>
        <p className="rating">
          Lançamento: {global.convertToDateBr(movie.release_date)}
        </p>
        <div className="plot">
          <img
            src={
              movie.poster_path
                ? process.env.REACT_APP_IMG + movie.poster_path
                : noImg
            }
            alt={movie.title}
          />
          <p>{movie.overview}</p>
        </div>
        <Link to="/" className="close">
          Fechar
        </Link>
      </div>
    </section>
  );
}
