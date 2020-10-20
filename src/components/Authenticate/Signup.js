import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { signup, selectAuthState } from '../../features/authenticate/authSlice';

export default () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();

  const { error } = useSelector(selectAuthState);

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(signup({ username, password }));
    setUsername('');
    setPassword('');
  };

  const errorMessage = <div>{error}</div>;

  return (
    <div>
      <h2>Sign up</h2>
      <form onSubmit={onSubmit}>
        <label>Username</label>
        <input
          type="text"
          name="username"
          onChange={(e) => setUsername(e.target.value)}
        ></input>
        <label>Password</label>
        <input
          type="password"
          name="password"
          onChange={(e) => setPassword(e.target.value)}
        ></input>
        <button>Submit</button>
      </form>
      {error && errorMessage}
    </div>
  );
};
