import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

const MobileNav = () => {
  const mobileAnimation = {
    hidden: {
      opacity: 0,
      x: 100,
    },
    show: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.3,
      },
    },
    exit: {
      opacity: 0,
      x: 100,
    },
  };
  return (
    <MobileNavSection
      variants={mobileAnimation}
      initial="hidden"
      animate="show"
      exit="exit"
    >
      <nav>
        <MobileNavList>
          <li>Product</li>
          <li>Bike Type</li>
          <li>About Us</li>
          <li>Testimonials</li>
          <li>Contact</li>
        </MobileNavList>
      </nav>
    </MobileNavSection>
  );
};

const MobileNavSection = styled(motion.section)`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 50;
  width: 100%;
  height: 100vh;
  background-color: #ffbd37;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  nav {
    width: 30vw;
    height: 60vh;
  }
`;

const MobileNavList = styled.ul`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  list-style: none;
  li {
    font-size: 1.5rem;
  }
`;

export default MobileNav;
