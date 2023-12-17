import React from 'react';

import styled from 'styled-components';
import { Title } from '../utils/Title';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton'
import LinkedIn from '@mui/icons-material/LinkedIn';
import Button from '@mui/material/Button'
const Container = styled.div``;
const Content = styled.div``;

const Label = styled.label`
margin-right: 1rem;
`;
const Value = styled.div``;
const Item = styled.div`
  display: flex;
`;
export const PersonalInfo = () => {
  return (
    <Container>
            <Title>PERSONAL INFO</Title>

    <Box
    component="form"
    sx={{
      '& .MuiTextField-root': { m: 1 },
    }}
    noValidate
    autoComplete="off"
  >
    <div>
      <TextField
        id="outlined-required"
        label="Name"
        defaultValue="Rajiv Kumar Rajpurohit"
        InputProps={{
          readOnly: true,
        }}
        fullWidth
      />
      <TextField
        id="outlined-required"
        label="Contact"
        defaultValue="+91 7276470853"
        InputProps={{
          readOnly: true,
        }}
        fullWidth
      />
      <TextField
        id="outlined-required"
        label="Address"
        defaultValue="Pune, Maharashtra, 411014"
        InputProps={{
          readOnly: true,
        }}
        fullWidth
      />
      <TextField
        id="outlined-required"
        label="DOB"
        defaultValue="05-JAN-1994 (as per document)"
        InputProps={{
          readOnly: true,
        }}
        fullWidth
      />
      <TextField
        id="outlined-required"
        label="Email Primary"
        defaultValue="rrajpurohit0068@gmail.com"
        InputProps={{
          readOnly: true,
        }}
        fullWidth
      />
      <TextField
        id="outlined-required"
        label="Email Secondary"
        defaultValue="rajivkumar.rajpurohit@gmail.com"
        InputProps={{
          readOnly: true,
        }}
        fullWidth
      />
      </div>
    <a href='https://www.linkedin.com/in/rajiv-jabar-singh-rajpurohit-185967166/' target='__blank'>
    <IconButton aria-label="linkedin">
        <LinkedIn />
</IconButton>
    </a>
    <a href='https://rb.gy/6gubsn' target='__blank'>

    <Button variant="outlined">Resume</Button>
    </a>
   

      
      </Box>
    
    </Container>
  );
};
