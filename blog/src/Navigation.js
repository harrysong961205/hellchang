// Navigation.js
import React from 'react';
import { Route } from 'react-router-dom';
import Cal from "./Cal"
import { Link } from 'react-router-dom';

function Navigate() {
  return (
    <nav>
      <ul>
        <li>
          <a >Routine
          <Link to={"./Cal"} >Cal </Link>
          </a>
          </li>
        <li><a href="#">콜로세움</a></li>
        <li><a href="#">my page</a></li>
      </ul>
    </nav>
  );
}

export default Navigate;