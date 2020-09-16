import React from 'react';

import './Grid.css';

const Row = ({ children }) => {
  return (
    <div className="row">{ children }</div>
  )
}

const Column = ({ children }) => {
  return (
    <div className="col">{ children }</div>
  )
}

const Grid = {
  Row, Column
}

export default Grid;
