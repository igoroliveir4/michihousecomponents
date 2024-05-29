import React from 'react';
import { TextField } from '@mui/material';
import { DatePicker as MuiDatePicker } from '@mui/lab';

const DatePicker = ({ selected, onChange, dateFormat }) => (
  <MuiDatePicker
    value={selected}
    onChange={onChange}
    renderInput={(params) => <TextField {...params} />}
  />
);

export default DatePicker;
