import React from "react";
import styled from "styled-components";

const Logo = () => {
  return (
    <HeaderLogo>
      <span className="big-B">B</span>
      <span className="e-bike">eBike</span>
    </HeaderLogo>
  );
};

const HeaderLogo = styled.div`
  display: flex;
  align-items: center;
  .big-B {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 2.6rem;
    height: 2.6rem;
    background-color: #ffbd37;
    color: white;
    font-weight: 700;
    font-size: 1.6rem;
    border-radius: 50%;
    margin-right: 0.5rem;
  }
  .e-bike {
    font-weight: 700;
    font-size: 1.5rem;
    color: #233348;
  }
`;

export default Logo;
