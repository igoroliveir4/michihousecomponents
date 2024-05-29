import React from 'react';
import PropTypes from 'prop-types';
import { Button as MuiButton } from '@mui/material';

const Button = ({ label, onClick, variant = 'contained', color = 'primary' }) => {
  return (
    <MuiButton variant={variant} color={color} onClick={onClick}>
      {label}
    </MuiButton>
  );
};

Button.propTypes = {
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  variant: PropTypes.oneOf(['text', 'outlined', 'contained']),
  color: PropTypes.oneOf(['inherit', 'primary', 'secondary', 'success', 'error', 'info', 'warning']),
};

export default Button;
