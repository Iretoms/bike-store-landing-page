import React, { useState } from "react";
import styled from "styled-components";
import Logo from "./Logo";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import MobileNav from "./MobileNav";

const headerAnimation = {
  hide: {
    opacity: 0,
    y: -100,
  },
  show: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      bounce: 0.2,
      duration: 1.5,
    },
  },
};

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const mobileNavHandler = () => {
    setMobileOpen(!mobileOpen);
  };

  mobileOpen
    ? document.body.classList.add("fixed")
    : document.body.classList.remove("fixed");

  return (
    <MainHeader>
      <Nav variants={headerAnimation} initial="hide" animate="show">
        <div>
          <Link to="/">
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
        <MenuBar className={mobileOpen && "active"} onClick={mobileNavHandler}>
          <span></span>
          <span></span>
          <span></span>
        </MenuBar>
        <AnimatePresence>{mobileOpen && <MobileNav />}</AnimatePresence>
      </Nav>
    </MainHeader>
  );
};

const MainHeader = styled.header`
  width: 100%;
  height: 15vh;
`;

const Nav = styled(motion.nav)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 70%;
  margin: 0 auto;
  padding-top: 3rem;

  @media screen and (max-width: 1200px) {
    width: 85%;
  }
`;

const NavList = styled.ul`
  list-style: none;
  display: flex;
  align-items: center;
  li {
    margin-left: 2.5rem;
    color: #7d7987;
    font-weight: 400;
    font-size: 1.1rem;
    &.active {
      font-weight: 700;
      color: #233348;
    }
  }

  @media screen and (max-width: 875px) {
    display: none;
  }
`;

const MenuBar = styled.div`
  z-index: 200;
  display: none;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  span {
    background-color: #ffbd37;
    display: block;
    width: 28px;
    height: 2px;
    border-radius: 9999px;
    transition: all 0.3s ease-in-out;
    &:not(:last-child) {
      margin-bottom: 7px;
    }
  }
  &.active {
    transition-delay: 0.8s;
    transform: rotate(45deg);
    span {
      background-color: #fff;
    }
    span:nth-child(2) {
      width: 0;
    }
    span:nth-child(1),
    span:nth-child(3) {
      transition-delay: 0.4s;
    }
    span:nth-child(1) {
      transform: translateY(9px);
    }
    span:nth-child(3) {
      transform: translateY(-9px) rotate(90deg);
    }
  }

  @media screen and (max-width: 875px) {
    display: block;
  }
`;

export default Header;
