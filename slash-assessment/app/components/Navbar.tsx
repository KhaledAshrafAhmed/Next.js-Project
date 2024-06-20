import React from 'react';
import classes from '../styles/classes.module.css'

const Navbar: React.FC = () => {
  return (
    <nav className={`${classes.navbarcontainer}`}>
      <a href="/" className={`${classes.navitem}`}>Home</a>
      <a href="/create-post" className={`${classes.navitem}`}>Create Post</a>
    </nav>
  );
};

export default Navbar;
