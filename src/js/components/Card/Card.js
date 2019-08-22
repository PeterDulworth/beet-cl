import React from 'react';
import './styles.scss';
import PropTypes from 'prop-types';
import { bclClassNames } from '../../utils/common';

const Card = ({ children, ...otherProps }) => {
    const classes = bclClassNames('Card');

    return <div className={classes}>{children}</div>;
};

Card.propTypes = {
    children: PropTypes.any.isRequired,
};

Card.displayName = 'Card';

export default Card;
