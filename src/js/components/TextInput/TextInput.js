import React from 'react';
import './styles.scss';
import PropTypes from 'prop-types';

const TextInput = ({ label, text, type, id, value, handleChange }) => (
  <div className="bcl-TextInput">
    <label htmlFor={label}>{text}</label>
    <input
      type={type}
      className="form-control"
      id={id}
      value={value}
      onChange={handleChange}
      required
    />
  </div>
);

TextInput.propTypes = {
  label: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired
};

export default TextInput;