import React from 'react';
import NavBar from '../components/NavBar/NavBar';

export default (props) => {
  return (
    <>
      <NavBar></NavBar>
      <main>{props.children}</main>
    </>
  );
};
