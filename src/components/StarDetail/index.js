/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import api from '../../services/api';
import * as global from '../../global';
import noImg from '../../assets/noImg.png';

export default function StarDetail({ match }) {
  const [star, setStar] = useState('');

  async function getData(id) {
    const response = await api.get(
      `/person/${id}?language=pt-BR&api_key=${process.env.REACT_APP_KEY}`
    );

    const { data } = response;
    setStar(data);
  }
  useEffect(() => {
    const data = match.params.id;
    getData(data);
  }, [match.params]);

  return (
    <section className="popup">
      <div className="content">
        <h2>{star.name}</h2>
        <p>Nascimento: {global.convertToDateBr(star.birthday)}</p>
        <p className="rating">Idade: {global.calculateAge(star.birthday)}</p>
        <div className="plot">
          <img
            src={
              star.profile_path
                ? process.env.REACT_APP_IMG + star.profile_path
                : noImg
            }
            alt={star.name}
          />
          <p>{star.biography}</p>
        </div>
        <Link to="/" className="close">
          Fechar
        </Link>
      </div>
    </section>
  );
}
