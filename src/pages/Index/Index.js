import React from 'react';
import { useSelector } from 'react-redux';
import { selectAuthState } from '../../features/authenticate/authSlice';
import classes from './Index.module.scss';

export default () => {
  const { username } = useSelector(selectAuthState);
  return (
    <>
      {username ? (
        <div className={'mt-5 ' + classes.welcome}>
          <h2>
            Welcome my master{' '}
            <span className="text-primary">{username.toUpperCase()}</span>
          </h2>
          <p className="text-success">Tony is good. Let's hire him!</p>
        </div>
      ) : (
        <div className={'mt-5 ' + classes.initial}>
          <h2>I'm currently available ! Anyone can login!</h2>
          <p className="mt-3 text-danger">
            Tony is not hired yet. Finger Crossed!
          </p>
        </div>
      )}
    </>
  );
};
