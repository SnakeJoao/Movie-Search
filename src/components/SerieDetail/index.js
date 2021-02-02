/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import api from '../../services/api';
import * as global from '../../global';
import noImg from '../../assets/noImg.png';

export default function SerieDetail({ match }) {
  const [serie, setSerie] = useState('');

  async function getData(id) {
    const response = await api.get(
      `/tv/${id}?language=pt-BR&api_key=${process.env.REACT_APP_KEY}`
    );

    const { data } = response;
    setSerie(data);
  }
  useEffect(() => {
    const data = match.params.id;
    getData(data);
  }, [match.params]);

  return (
    <section className="popup">
      <div className="content">
        <h2>{serie.name}</h2>
        <p>Avaliação: {serie.vote_average}</p>
        <p>Temporadas: {serie.number_of_seasons}</p>
        <p className="rating">
          Lançamento: {global.convertToDateBr(serie.first_air_date)}
        </p>
        <div className="plot">
          <img
            src={
              serie.poster_path
                ? process.env.REACT_APP_IMG + serie.poster_path
                : noImg
            }
            alt={serie.name}
          />
          <p>{serie.overview}</p>
        </div>
        <Link to="/" className="close">
          Fechar
        </Link>
      </div>
    </section>
  );
}
