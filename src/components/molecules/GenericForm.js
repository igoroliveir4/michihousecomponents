import React from 'react';
import { TextField, Button } from '@mui/material';

const GenericForm = ({ fields, onSubmit }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit();
  };

  return (
    <form onSubmit={handleSubmit}>
      {fields.map((field, index) => (
        <TextField
          key={index}
          label={field.label}
          variant="outlined"
          fullWidth
          margin="normal"
          {...field.props}
        />
      ))}
      <Button type="submit" variant="contained" color="primary">Submit</Button>
    </form>
  );
};

export default GenericForm;
