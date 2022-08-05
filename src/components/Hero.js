import React, { useState } from "react";
import Lottie from "lottie-react";
import HeroLottie from "../assets/lotties/heroLottie.json";
import styled from "styled-components";
import { FaSearch } from "react-icons/fa";
import Button from "./Button";

const Hero = () => {
  const [bikeSearch, setBikeSearch] = useState("");
  
  return (
    <Section>
      <Container>
        <HeroText>
          <h1>Your Bike Electric Update</h1>
          <p>
            Dummy text progressive, and affordable healthcare, accessible on
            mobile and online for everyone
          </p>
          <form onSubmit={(e) => e.preventDefault()}>
            <FaSearch />
            <input
              type="text"
              placeholder="Search Bike or anything"
              value={bikeSearch}
              onChange={(e) => setBikeSearch(e.target.value)}
            />
            <div className="button-container">
              <Button type="submit" text="find" />
            </div>
          </form>
        </HeroText>
        <HeroImage>
          <Lottie animationData={HeroLottie} />
        </HeroImage>
      </Container>
    </Section>
  );
};

const Section = styled.section`
  width: 100%;
  min-height: 85vh;
`;

const Container = styled.div`
  width: 70%;
  min-height: 75vh;
  margin: 0 auto;
  display: flex;
  align-items: flex-end;
  article {
    width: 50%;
  }
`;

const HeroText = styled.article`
  h1 {
    font-weight: 700;
    font-size: 3rem;
    color: #233348;
    width: 80%;
    line-height: 3.5rem;
    margin-bottom: 3rem;
  }
  p {
    font-weight: 300;
    font-size: 1.3rem;
    color: #7d7087;
    width: 90%;
    line-height: 2rem;
    margin-bottom: 3rem;
  }
  form {
    position: relative;
    display: flex;
    align-items: center;
    width: 92%;
    input {
      padding-left: 2.5rem;
      width: 100%;
      height: 3.5rem;
      color: #c2cfe0;
      font-weight: 400;
      font-size: 0.9rem;
      border-radius: 100px;
      border: 1px solid #c2cfe0;
      &:focus {
        outline: none;
      }
      &::placeholder {
        color: #c2cfe0;
      }
    }
    svg {
      color: #c2cfe0;
      position: absolute;
      left: 1rem;
    }
    .button-container {
      position: absolute;
      right: 0.5rem;
    }
  }
`;

const HeroImage = styled.article``;

export default Hero;
