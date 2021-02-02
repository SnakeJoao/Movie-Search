/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React from 'react';
import { Link } from 'react-router-dom';

import noImg from '../../../assets/noImg.png';

const Result = props => {
  return (
    <>
      {props.result.media_type === 'tv' ? (
        <Link to={`/serie/${props.result.id}`}>
          <section className="result">
            <img
              src={
                props.result.poster_path
                  ? process.env.REACT_APP_IMG + props.result.poster_path
                  : noImg
              }
              alt={props.result.name}
            />
            <h3>{props.result.name}</h3>
          </section>
        </Link>
      ) : (
        false
      )}
      {props.result.media_type === 'person' ? (
        <Link to={`/pessoa/${props.result.id}`}>
          <section className="result">
            <img
              src={
                props.result.profile_path
                  ? process.env.REACT_APP_IMG + props.result.profile_path
                  : noImg
              }
              alt={props.result.name}
            />
            <h3>{props.result.name}</h3>
          </section>
        </Link>
      ) : (
        false
      )}
      {props.result.media_type !== 'person' &&
      props.result.media_type !== 'tv' ? (
        <Link to={`/filme/${props.result.id}`}>
          <section className="result">
            <img
              src={
                props.result.poster_path
                  ? process.env.REACT_APP_IMG + props.result.poster_path
                  : noImg
              }
              alt={props.result.title}
            />
            <h3>{props.result.title}</h3>
          </section>
        </Link>
      ) : (
        false
      )}
    </>
  );
};

export default Result;
