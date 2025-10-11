import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="brand-container">
        <div className="brand">NNW<div className="slogan">NEWS Network Web</div></div>
      </div>
      <nav className="nav">
        <ul>
          <li>Home</li>
          <li>Breaking News</li>
          <li>Politics</li>
          <li>Business</li>
          <li>Sports</li>
          <li>Local</li>
          <li>World</li>
          <li>Entertainment</li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;


