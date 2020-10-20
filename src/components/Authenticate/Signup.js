import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { signup, selectAuthState } from '../../features/authenticate/authSlice';
import Spinner from '../UI/Spinner/Spinner';

export default () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();

  const { error, loading } = useSelector(selectAuthState);

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(signup({ username, password }));
    setUsername('');
    setPassword('');
  };

  const errorMessage = <div>{error}</div>;

  return (
    <div className="mt-5 mx-auto" style={{ maxWidth: '500px' }}>
      {loading ? (
        <Spinner />
      ) : (
        <>
          <h2>Sign Up Form</h2>
          <form onSubmit={onSubmit}>
            <div className="form-group">
              <label htmlFor="username">Username</label>
              <input
                className="form-control"
                type="text"
                name="username"
                id="username"
                onChange={(e) => setUsername(e.target.value)}
              ></input>
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                className="form-control"
                type="password"
                name="password"
                id="password"
                onChange={(e) => setPassword(e.target.value)}
              ></input>
            </div>
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </form>
        </>
      )}
      {error && errorMessage}
    </div>
  );
};
