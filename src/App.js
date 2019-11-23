import React from 'react';
import { directive } from '@babel/types';
// import React, { Component } from 'react';

function App() {
  return (
    <React.Fragment>
      <label htmlFor="bar">bar</label>
      <input type="text" onChange={() => {console.log("hello")}} />
    </React.Fragment>
  );
}

export default App;
