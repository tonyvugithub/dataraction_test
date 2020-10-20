import React from 'react';
import { useSelector } from 'react-redux';
import { Redirect, Route, Switch, withRouter } from 'react-router-dom';
import Signin from '../../components/Authenticate/Signin';
import Signup from '../../components/Authenticate/Signup';
import Signout from '../../components/Authenticate/Signout';
import { selectAuthState } from './authSlice';

export default withRouter((props) => {
  const { token } = useSelector(selectAuthState);
  const authRedirect = token ? <Redirect to="/" /> : null;

  return (
    <div>
      {authRedirect}
      <Switch>
        <Route path={props.match.path + '/signin'} component={Signin} />
        <Route path={props.match.path + '/signup'} component={Signup} />
        <Route path={props.match.path + '/signout'} component={Signout} />
      </Switch>
    </div>
  );
});
