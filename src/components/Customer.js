import React from "react";
import styled from "styled-components";
import CustomerCarousel from "./CustomerCarousel";

const Customer = () => {
  return (
    <Section>
      <Container>
        <CustomerCarousel />
      </Container>
    </Section>
  );
};

const Section = styled.section`
  width: 100%;
  min-height: 80vh;
`;

const Container = styled.div`
  margin: 0 auto;
  width: 70%;
  .swiper-pagination-bullet-active {
    background-color: #fff;
  }
`;

export default Customer;
