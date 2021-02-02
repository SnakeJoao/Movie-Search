/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/no-array-index-key */
import React from 'react';
import Result from './Result/Result';

const Results = props => {
  return (
    <section className="results">
      {props.results.map((result, index) => {
        return <Result key={index} result={result} />;
      })}
    </section>
  );
};

export default Results;
