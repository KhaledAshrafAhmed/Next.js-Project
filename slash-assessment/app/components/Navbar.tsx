// app/components/Navbar.tsx
"use client";

import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import classes from '../styles/classes.module.css'

const NavbarContainer = styled.nav`
  display: flex;
  justify-content: space-around;
  padding: 1rem 2rem;
  background-color: #0070f3;
  color: white;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  margin: 1rem auto;
  max-width: 1200px;
  text-decoration: none;
`;

const NavItem = styled.a`
  color: white;
  text-decoration: none;
  font-weight: bold;
  padding: 0.5rem 1rem;
  border-radius: 5px;

  &:hover {
    background-color: #005bb5;
  }
`;

const Navbar: React.FC = () => {
  return (
    <NavbarContainer>
      <Link href="/" className={`${classes.NoDecoration}`} passHref>
        <NavItem >Home</NavItem>
      </Link>
      <Link href="/create-post" className={`${classes.NoDecoration}`} passHref>
        <NavItem>Create Post</NavItem>
      </Link>
    </NavbarContainer>
  );
};

export default Navbar;
