import React from 'react';
import { TextField, Select as MuiSelect, MenuItem } from '@mui/material';

const Select = ({ options, value, onChange }) => (
  <MuiSelect value={value} onChange={onChange}>
    {options.map(option => (
      <MenuItem key={option.value} value={option.value}>
        {option.label}
      </MenuItem>
    ))}
  </MuiSelect>
);

export default Select;
