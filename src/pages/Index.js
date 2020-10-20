import React from 'react';
import { useSelector } from 'react-redux';
import { selectAuthState } from '../features/authenticate/authSlice';
export default () => {
  const { username } = useSelector(selectAuthState);
  return (
    <>
      {username ? (
        <div>Welcome my master {username}</div>
      ) : (
        <div>I'm currently free and not belong to anyone</div>
      )}
    </>
  );
};
