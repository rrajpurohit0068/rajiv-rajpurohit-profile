import styled from 'styled-components';
import { TypeAnimation } from 'react-type-animation';
import React from 'react';

const TypeAnimationWrapper = styled(TypeAnimation)`
  &::after {
    align-self: flex-end;
  }
`




export const Typing = ({ sequence, classNames }) => {
  return (
    <TypeAnimationWrapper
    sequence={sequence}
    wrapper="h1"
    cursor={true}
    repeat={Infinity}
    style={{ 
      fontSize: '4em',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center', }}

    />
 
  );
};
