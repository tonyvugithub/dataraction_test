import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectAuthState } from '../../features/authenticate/authSlice';
export default (props) => {
  const { token } = useSelector(selectAuthState);
  return (
    <header>
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        {!token ? (
          <>
            <li>
              <NavLink to="/auth/signin">Sign In</NavLink>
            </li>
            <li>
              <NavLink to="/auth/signup">Sign Up</NavLink>
            </li>
          </>
        ) : (
          <li>
            <NavLink to="/auth/signout">Sign Out</NavLink>
          </li>
        )}
      </ul>
    </header>
  );
};
