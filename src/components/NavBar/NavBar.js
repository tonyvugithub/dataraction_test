import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectAuthState } from '../../features/authenticate/authSlice';
export default (props) => {
  const { token } = useSelector(selectAuthState);
  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-light bg-light ">
        <div className="mx-lg-auto">
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <div className="nav-link">
                <NavLink to="/">Home</NavLink>
              </div>
              {!token ? (
                <>
                  <div className="nav-link">
                    <NavLink to="/auth/signin">Sign In</NavLink>
                  </div>
                  <div className="nav-link">
                    <NavLink to="/auth/signup">Sign Up</NavLink>
                  </div>
                </>
              ) : (
                <div className="nav-link">
                  <NavLink to="/auth/signout">Sign Out</NavLink>
                </div>
              )}
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};
