import React from 'react';
import styled from 'styled-components';

import Ebikes from './Ebikes';
import OtherBike from './OtherBike';

const BikeTypes = () => {
    return (
      <Section>
        <Container>
          <article className="e-bike">
            <Ebikes />
          </article>
          <article className="other-types">
            <h4>Other Type Of Bikes</h4>
            <OtherBike/>
          </article>
        </Container>
      </Section>
    )
}



const Section = styled.section`
min-height:100vh;
width: 100%;
`

const Container = styled.div`
  width: 70%;
  margin: 0 auto;
  .other-types {
    margin-top: 2rem;
    h4 {
      color: #233348;
      font-weight: 600;
      font-size: 1.5rem;
      margin-bottom: 2rem;
    }
  }

  @media screen and (max-width: 1200px) {
    width: 85%;
  }
`;

export default BikeTypes;