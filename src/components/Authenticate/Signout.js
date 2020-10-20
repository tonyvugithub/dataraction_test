import React, { useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { signout } from '../../features/authenticate/authSlice';

export default () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(signout());
  }, [dispatch]);

  return <Redirect to="/" />;
};
