import React from 'react';
import styled from 'styled-components';
import Logo from './Logo';
import {Link} from 'react-router-dom'

const Header = () => {
    return (
      <MainHeader>
        <Nav>
          <div>
            <Link to = '/'>
              <Logo />
            </Link>
          </div>
          <NavList>
            <li className="active">Product</li>
            <li>Bike Type</li>
            <li>About Us</li>
            <li>Testimonials</li>
            <li>Contact</li>
          </NavList>
        </Nav>
      </MainHeader>
    );
};


const MainHeader = styled.header`
width: 100%;
height: 15vh;
`

const Nav = styled.nav`
display: flex;
justify-content: space-between;
align-items: center;
width: 70%;
margin: 0 auto;
padding-top: 3rem;
`

const NavList = styled.ul`
list-style: none;
display: flex;
align-items: center;
li {
    margin-left: 2.5rem;
    color: #7D7987;
    font-weight: 400;
    font-size: 1.1rem;
    &.active {
        font-weight: 700;
        color: #233348;
    }
}
`

export default Header;