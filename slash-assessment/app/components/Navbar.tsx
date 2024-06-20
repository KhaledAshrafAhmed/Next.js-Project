// app/components/Navbar.tsx
"use client";

import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';

const Nav = styled.nav`
  background: #0070f3;
  padding: 1rem;
`;

const NavLink = styled(Link)`
  margin-right: 1rem;
  color: white;
  text-decoration: none;
`;

const Navbar: React.FC = () => (
  <Nav>
    <NavLink href="/">Home</NavLink>
    <NavLink href="/create-post">Create Post</NavLink>
  </Nav>
);

export default Navbar;
