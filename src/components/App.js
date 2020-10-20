import React, { useEffect } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Layout from '../hoc/Layout';
import Main from '../pages/Index';
import Authenticate from '../pages/Authenticate';
import { useDispatch } from 'react-redux';
import { validateExistingToken } from '../features/authenticate/authSlice';

export default (props) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(validateExistingToken());
  }, [dispatch]);

  const routes = (
    <Switch>
      <Route path="/auth" component={Authenticate} />
      <Route path="/" exact component={Main} />
      <Redirect to="/" />
    </Switch>
  );
  return (
    <div className="App">
      <Layout>{routes}</Layout>
    </div>
  );
};
