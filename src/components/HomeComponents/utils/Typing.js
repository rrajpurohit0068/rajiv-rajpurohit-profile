import styled from 'styled-components';
import { TypeAnimation } from 'react-type-animation';
import React from 'react';




export const Typing = ({ sequence, classNames }) => {
  return (
    <TypeAnimation
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
