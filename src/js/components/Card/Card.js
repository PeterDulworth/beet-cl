import React from 'react';
import './styles.scss';
import PropTypes from 'prop-types';

const Card = ({ children, ...otherProps }) => (
    <div className='bcl-Card'>{children}</div>
);

Card.propTypes = {
    children: PropTypes.string.isRequired,
};

export default Card;
