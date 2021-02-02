import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import '../index.css';
import Container from '../components/Container';
import SerieDetail from '../components/SerieDetail';
import MovieDetail from '../components/MovieDetail';
import StarDetail from '../components/StarDetail';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Container} />
        <Route path="/filme/:id" component={MovieDetail} />
        <Route path="/serie/:id" component={SerieDetail} />
        <Route path="/pessoa/:id" component={StarDetail} />
      </Switch>
    </BrowserRouter>
  );
}
