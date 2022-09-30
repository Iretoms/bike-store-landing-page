import React from "react";
import { motion } from "framer-motion";
import { textAnimate } from "../animation";
import styled from "styled-components";
import Logo from "./Logo";

const Footer = () => {
  return (
    <MainFooter>
      <Container>
        <FooterText
          initial="hide"
          whileInView={"show"}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ staggerChildren: 0.5 }}
        >
          <motion.div variants={textAnimate} className="logo-container">
            <Logo />
          </motion.div>
          <motion.p variants={textAnimate}>
            Trafalgar provides progressive, and affordable healthcare,
            accessible on mobile and online for everyone
          </motion.p>
          <motion.p variants={textAnimate}>
            &copy;eBike 2021. All rights reserved
          </motion.p>
        </FooterText>
        <FooterLink
          initial="hide"
          whileInView={"show"}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ staggerChildren: 0.5 }}
        >
          <motion.ul variants={textAnimate}>
            <li>Company</li>
            <li>Product</li>
            <li>Bike Type</li>
            <li>About Us</li>
            <li>Contact</li>
          </motion.ul>
          <motion.ul variants={textAnimate}>
            <li>Help</li>
            <li>Help center</li>
            <li>Contact support</li>
            <li>Instructions</li>
            <li>How it works</li>
          </motion.ul>
        </FooterLink>
        <motion.div
          initial="hide"
          whileInView={"show"}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ staggerChildren: 0.5 }}
        >
          <motion.p variants={textAnimate} className="copyright">
            &copy;eBike 2021. All rights reserved
          </motion.p>
        </motion.div>
      </Container>
    </MainFooter>
  );
};

const MainFooter = styled.footer`
  width: 100%;
  min-height: 60vh;
  background: #fcb72b;
  display: flex;
  align-items: center;
`;

const Container = styled.div`
  color: #fff;
  width: 70%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  article {
    width: 40%;
  }
  .copyright {
    display: none;
  }

  @media screen and (max-width: 1200px) {
    width: 85%;
  }

  @media screen and (max-width: 875px) {
    flex-direction: column;
    padding: 3rem 0;
    article {
      width: 80%;
    }
    .copyright {
      margin-top: 1rem;
      display: block;
      text-align: center;
    }
  }
`;

const FooterText = styled(motion.article)`
  .logo-container {
    margin-bottom: 1rem;
    .big-B {
      background-color: #fff;
      color: #ffbd37;
    }
    .e-bike {
      color: #fff;
    }
  }
  p:nth-of-type(1) {
    font-weight: 300;
    font-size: 1.1rem;
    margin-bottom: 2rem;
  }
  p:nth-of-type(2) {
    font-weight: 300;
    font-size: 1rem;
  }

  @media screen and (max-width: 875px) {
    p:nth-of-type(2) {
      display: none;
    }
  }
`;

const FooterLink = styled(motion.article)`
  display: flex;
  justify-content: space-between;
  ul {
    list-style: none;
    li {
      font-weight: 300;
      font-size: 1.1rem;
      margin-bottom: 1rem;
    }

    li:nth-of-type(1) {
      font-weight: 700;
      font-size: 1.2rem;
      margin-bottom: 1.5rem;
    }
  }

  @media screen and (max-width: 875px) {
    flex-direction: column;
  }
`;

export default Footer;
