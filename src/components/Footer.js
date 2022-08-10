import React from "react";
import styled from "styled-components";
import Logo from "./Logo";

const Footer = () => {
  return (
    <MainFooter>
      <Container>
        <FooterText>
          <div className="logo-container">
            <Logo />
          </div>
          <p >
            Trafalgar provides progressive, and affordable healthcare,
            accessible on mobile and online for everyone
          </p>
          <p>&copy;eBike 2021. All rights reserved</p>
        </FooterText>
        <FooterLink>
          <ul>
            <li>Company</li>
            <li>Product</li>
            <li>Bike Type</li>
            <li>About Us</li>
            <li>Contact</li>
          </ul>
          <ul>
            <li>Help</li>
            <li>Help center</li>
            <li>Contact support</li>
            <li>Instructions</li>
            <li>How it works</li>
          </ul>
        </FooterLink>
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

  @media screen and (max-width: 1200px) {
    width: 85%;
  }
`;

const FooterText = styled.article`
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
  p:nth-of-type(1){
    font-weight: 300;
    font-size: 1.1rem;
    margin-bottom: 2rem;
  }
  p:nth-of-type(2){
    font-weight: 300;
    font-size: 1rem;
  }
`;

const FooterLink = styled.article`
display: flex;
justify-content: space-between;
ul {
    list-style: none;
    li {
        font-weight: 300;
        font-size: 1.1rem;
        margin-bottom: 1rem;
    }

    li:nth-of-type(1){
        font-weight: 700;
        font-size: 1.2rem;
        margin-bottom: 1.5rem;
    }
}
`

export default Footer;
