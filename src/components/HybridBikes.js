import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { textAnimate, imageAnimate } from "../animation";
import hybridBike from "../assets/svgs/hybridBikes.svg";
import Button from "./Button";

const HybridBikes = () => {
  return (
    <Section>
      <Container>
        <Card
          initial="hide"
          whileInView={"show"}
          viewport={{ once: true, amount: 1 }}
          transition={{ staggerChildren: 0.5 }}
        >
          <div className="image-container">
            <motion.img variants={imageAnimate} src={hybridBike} alt="" />
          </div>
          <motion.div variants={textAnimate} className="price-order">
            <div>
              <p>price</p>
              <h4>$750.00</h4>
            </div>
            <Button type="" text="Order" />
          </motion.div>
        </Card>
        <Text
          initial="hide"
          whileInView={"show"}
          viewport={{ once: true, amount: 1 }}
          transition={{ staggerChildren: 0.5 }}
        >
          <motion.h1 variants={textAnimate}>Hybrid Bikes</motion.h1>
          <motion.p variants={textAnimate}>
            Dummy Text progressive, and affordable healthcare, accessible on
            mobile and online for everyone. To us, it's not just work. We take
            pride in the solutions we deliver
          </motion.p>
          <div className="learn-more">
            <motion.button variants={textAnimate}>Learn more</motion.button>
          </div>
        </Text>
      </Container>
    </Section>
  );
};

const Section = styled.section`
  min-height: 100vh;
  width: 100%;
  display: flex;
  align-items: center;
`;

const Container = styled.div`
  width: 70%;
  margin: 0 auto;
  display: flex;
  align-items: center;
  gap: 5rem;
  @media screen and (max-width: 1200px) {
    width: 85%;
  }

  @media screen and (max-width: 875px) {
    flex-direction: column;
    padding: 3rem 0 5rem;
  }
`;

const Card = styled(motion.article)`
  padding: 1.5rem;
  width: 23.9rem;
  height: 24.1rem;
  box-shadow: 10px 24px 54px rgba(0, 0, 0, 0.06);
  border-radius: 20px;
  .image-container {
    text-align: center;
    padding: 1.8rem 0 1.5rem;
    border-bottom: 1px solid #c2cfe0;
    img {
      width: 242px;
      height: 204px;
    }
  }
  .price-order {
    padding-top: 1rem;
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    p {
      font-weight: 400;
      color: #7d7987;
      margin-bottom: 0.8rem;
    }
    h4 {
      font-weight: 700;
      font-size: 1.2rem;
    }
  }
  @media screen and (max-width: 875px) {
    width: 100%;
  }
`;

const Text = styled(motion.article)`
  width: 30rem;
  h1 {
    font-weight: 700;
    font-size: 2.3rem;
    line-height: 3.5rem;
    color: #233348;
  }
  p {
    font-weight: 300;
    line-height: 1.9rem;
    color: #7d7987;
    width: 90%;
    font-size: 1.2rem;
    margin: 2rem 0;
  }
  button {
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1.4px solid #fcb72b;
    border-radius: 55px;
    height: 56px;
    width: 200px;
    color: #fcb72b;
    font-family: inherit;
    font-size: 1.2rem;
    background-color: transparent;
    cursor: pointer;
    line-height: 60px;
  }

  @media screen and (max-width: 875px) {
    width: 100%;
    text-align: center;
    button {
      margin: 0 auto;
    }
  }
`;

export default HybridBikes;
