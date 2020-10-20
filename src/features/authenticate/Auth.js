import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, Redirect, Route, Switch, withRouter } from 'react-router-dom';
import Signin from '../../components/Authenticate/Signin';
import Signup from '../../components/Authenticate/Signup';
import { selectAuthState, validateExistingToken } from './authSlice';

export default withRouter((props) => {
  const [showSigninBtn, setShowSigninBtn] = useState(true);
  const [showSignupBtn, setShowSignupBtn] = useState(true);

  const { token } = useSelector(selectAuthState);
  const authRedirect = token ? <Redirect to="/" /> : null;

  return (
    <div>
      {authRedirect}
      {showSigninBtn && (
        <NavLink to={'/auth/signin'}>
          <button
            onClick={() => {
              setShowSigninBtn(false);
              setShowSignupBtn(true);
            }}
          >
            Sign In
          </button>
        </NavLink>
      )}
      {showSignupBtn && (
        <NavLink to={'/auth/signup'}>
          <button
            onClick={() => {
              setShowSigninBtn(true);
              setShowSignupBtn(false);
            }}
          >
            Sign Up
          </button>
        </NavLink>
      )}

      {/*Problem is here*/}
      {/* <Switch>
        <Route path={props.match.path + '/signin'} component={Signin} />
        <Route path={props.match.path + '/signup'} component={Signup} />
      </Switch> */}
      <Signup />
    </div>
  );
});
