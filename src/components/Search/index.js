/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React from 'react';

const Search = props => {
  return (
    <section className="searchbox-wrap">
      <input
        type="text"
        className="searchbox"
        placeholder="Pesquise por filme, série ou celebridade"
        value={props.inputTerm}
        onChange={props.handleTheInput}
        onKeyPress={props.handleTheSearch}
      />
    </section>
  );
};

export default Search;
