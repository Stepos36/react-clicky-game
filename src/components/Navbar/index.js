import React from "react";
import "./style.css";

function Navbar(props) {
  return (
    <nav className="navbar navbar-expand-lg fixed-top navbar-dark bg-dark">
      <a href="/" className="navbar-brand">
        Clicky game
      </a>
      <div className='ml-auto'>
        <ul className="navbar-nav">
          <li className="nav-item">
            <a target="_blank" href="https://github.com/Stepos36/react-clicky-game">
              Github
            </a>
          </li>
          <li className="nav-item">
            <a target="_blank" href="https://nelasov.me/">
              Contact me
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
