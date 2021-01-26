import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Navbar = styled.div`
  height: 60px;
  background: transparent;
  padding: 0rem calc((100vw - 1300px) / 2);
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const NavItems = styled.div``;

const NavbarLink = styled(Link)`
  color: #000;
  text-decoration: none;
  padding: 1rem;
`;

const Logo = styled(Link)`
  color: #000;
  padding-left: 1rem;
  text-decoration: none;
  font-size: 1.5rem;
  font-weight: bold;
  font-style: italic;
`;

const Header = () => {
  return (
    <Navbar>
      <Logo to='/'>Countries</Logo>
      <NavItems>
        <NavbarLink to='/'>Home</NavbarLink>
        <NavbarLink to='/about'>About</NavbarLink>
        <NavbarLink to='/services'>Services</NavbarLink>
      </NavItems>
    </Navbar>
  );
};

export default Header;
