import React from 'react';
// import { directive } from '@babel/types';
// import React, { Component } from 'react';

const App = () => {
  return (
    <React.Fragment>
      <label htmlFor="bar">bar</label>
      <input type="text" onChange={() => {console.log("hello")}} />
      <Cat />
    </React.Fragment>
  );
}

const Cat = () => {
  return (
    <div>meaw!</div>
  );
}


export default App;
