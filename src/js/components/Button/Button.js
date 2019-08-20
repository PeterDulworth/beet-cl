import React from 'react';
import './styles.scss';
import PropTypes from 'prop-types';

const Button = ({ children, onClick, ...otherProps }) => (
  <div className="bcl-Button">
    <button onClick={onClick} {...otherProps}>{children}</button>
  </div>
);

Button.propTypes = {
    children: PropTypes.string.isRequired,
};

export default Button;