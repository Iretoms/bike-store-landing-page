import React from 'react';
import styled from 'styled-components';

import Ebikes from './Ebikes';

const BikeTypes = () => {
    return (
        <Section>
            <Container>
                <article className='e-bike'>
                    <Ebikes/>
                </article>
            </Container>
        </Section>
    );
};

const Section = styled.section`
min-height:100vh;
width: 100%;
`

const Container = styled.div`
width: 70%;
margin: 0 auto;
`

export default BikeTypes;