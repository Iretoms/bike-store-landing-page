import React, { useState } from "react";
import { motion } from "framer-motion";
import { textAnimate, imageAnimate } from "../animation";
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
        <HeroText
          initial="hide"
          whileInView={"show"}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ staggerChildren: 0.5 }}
        >
          <motion.h1 variants={textAnimate}>
            Your Bike Electric Update
          </motion.h1>
          <motion.p variants={textAnimate}>
            Dummy text progressive, and affordable healthcare, accessible on
            mobile and online for everyone
          </motion.p>
          <motion.form
            variants={textAnimate}
            onSubmit={(e) => e.preventDefault()}
          >
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
          </motion.form>
        </HeroText>
        <HeroImage
          initial="hide"
          whileInView={"show"}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ staggerChildren: 0.5 }}
        >
          <motion.div variants={imageAnimate}>
            <Lottie animationData={HeroLottie} />
          </motion.div>
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
  min-height: 70vh;
  margin: 0 auto;
  display: flex;
  align-items: flex-end;
  article {
    width: 50%;
  }

  @media screen and (max-width: 1200px) {
    width: 85%;
  }

  @media screen and (max-width: 875px) {
    flex-direction: column;
    article {
      width: 100%;
    }
  }
`;

const HeroText = styled(motion.article)`
  h1 {
    font-weight: 700;
    font-size: 3rem;
    color: #233348;
    width: 80%;
    line-height: 3.5rem;
    margin-bottom: 2.5rem;
  }
  p {
    font-weight: 300;
    font-size: 1.3rem;
    color: #7d7087;
    width: 90%;
    line-height: 2rem;
    margin-bottom: 3.5rem;
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
      color: #000;
      font-weight: 400;
      font-size: 0.9rem;
      font-style: inherit;
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

  @media screen and (max-width: 875px) {
    text-align: center;
    h1 {
      width: 100%;
    }
    p {
      width: 100%;
    }
    form {
      width: 100%;
      input {
        font-size: 0.8rem;
      }
    }
  }
`;

const HeroImage = styled(motion.article)``;

export default Hero;
