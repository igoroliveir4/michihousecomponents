import React from 'react';
import { TextField } from '@mui/material';

const Input = ({ value, onChange, placeholder }) => (
  <TextField
    type="text"
    value={value}
    onChange={onChange}
    placeholder={placeholder}
  />
);

export default Input;
