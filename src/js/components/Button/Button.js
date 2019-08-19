import React from 'react';
import './style.scss';
import PropTypes from 'prop-types';

const Button = ({ children }) => (
  <div className="bcl-Button">
    <button>{children}</button>
  </div>
);

Button.propTypes = {
    children: PropTypes.string.isRequired,
};

export default Button;