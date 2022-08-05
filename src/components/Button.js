import React from 'react';
import styled from 'styled-components';

const Button = ({type,text}) => {
    return (
        <StyledButton type={type}>
            {text}
        </StyledButton>
    );
};

const StyledButton = styled.button`
  border: none;
  border-radius: 100px;
  font-weight: 600;
  font-size: 0.9rem;
  font-family: inherit;
  width: 6.8rem;
  height: 2.5rem;
  background: linear-gradient(
    180deg,
    rgba(255, 189, 55, 0.58) 0%,
    #ffbd37 100%
  );
  cursor: pointer;
`;

export default Button;