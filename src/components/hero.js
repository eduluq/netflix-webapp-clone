import React from 'react';
import { withRouter } from 'react-router-dom';

//import styles
import './hero.css'

const onClick = (history) => {
  //go to master of none page
  history.push('/movie/64254');
}

const Hero = (props) => (
  <div className="hero">
    <img className="hero__bg" alt="hero bg" src="https://occ-0-1999-360.1.nflxso.net/art/48792/c2d85b04fdd2f3e476e621bf0aafec9f0eb48792.webp"/>
    <img className="hero__award-headline" alt="hero award headline" src="https://occ-0-1999-360.1.nflxso.net/art/e2374/cd760086ef09e23c756df8ad4c0fc97b4efe2374.webp"/>
    <div className="hero__award-subtitle">
      <img alt="hero award subtitle" src="https://occ-0-1999-360.1.nflxso.net/art/69d25/147ad74351fabefd3f0a0e3a0d198b9bc9d69d25.webp"/>
      <p>¡Allora! Mejor actor de comedia: Aziz Ansari.</p>
      <div className="hero__links">
        <button onClick={() => onClick(props.history)}><i className="fa fa-play" aria-hidden="true"></i> Reproducir</button>
        <button onClick={() => onClick(props.history)}><i className="fa fa-plus" aria-hidden="true"></i> Mi lista</button>
      </div>
    </div>
  </div>
)

export default withRouter(Hero);
