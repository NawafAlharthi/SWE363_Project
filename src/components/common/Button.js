import React from 'react';
import PropTypes from 'prop-types';
import './Button.css';

const Button = ({
  children,
  as: Component = 'button',
  variant = 'primary',
  size = 'medium',
  fullWidth = false,
  disabled = false,
  onClick,
  className = '',
  type = 'button',
  ...props
}) => {
  return (
    <Component
      className={`button button-${variant} button-${size} ${fullWidth ? 'button-full-width' : ''} ${className}`}
      disabled={disabled}
      onClick={onClick}
      type={Component === 'button' ? type : undefined}
      {...props}
    >
      {children}
    </Component>
  );
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  as: PropTypes.elementType,
  variant: PropTypes.oneOf(['primary', 'secondary', 'outline', 'text', 'danger']),
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  fullWidth: PropTypes.bool,
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
  className: PropTypes.string,
  type: PropTypes.oneOf(['button', 'submit', 'reset']),
};

export default Button; 