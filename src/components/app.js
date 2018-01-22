import React from 'react';
import { Route } from 'react-router-dom';

//import styles
import './app.css';

//import components
import Header from './header';

//import layouts
import Main from '../layout/main';
import Search from '../layout/search';
import Movie from '../layout/movie'

const App = () => (
  <div className="app">
    <Header />
    <Route exact path="/" component={Main} />
    <Route path="/search/:searchQuery" component={Search} />
    <Route path="/movie/:movieId" component={Movie} />
  </div>
);

export default App;
