import React from 'react';
import { NavLink } from 'react-router-dom';

export default (props) => {
  return (
    <header>
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/auth">Authenticate</NavLink>
        </li>
      </ul>
    </header>
  );
};
