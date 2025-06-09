import React from 'react';
// Move the CSS part into Atom.css

const Atom = () => {
  return (
    <div className="atom">
      <div className="orbit orbit1">
        <div className="electron"></div>
      </div>
      <div className="orbit orbit2">
        <div className="electron"></div>
      </div>
      <div className="orbit orbit3">
        <div className="electron"></div>
      </div>
      <div className="nucleus"></div>
    </div>
  );
};

export default Atom;
