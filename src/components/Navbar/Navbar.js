import React from 'react';
import './style.css';

function Navbar(props) {
  return (
    <nav className="navbar navbar-expand-sm navbar-light bg-light">
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav nav-fill w-100">
          <li className="score">Correct: {props.score}</li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
