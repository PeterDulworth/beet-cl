import React from 'react';
import './styles.scss';
import PropTypes from 'prop-types';
import { bclClassNames } from '../../utils/common';

const Card = ({ children, ...customProps }) => {
    const classes = bclClassNames('Card');

    return (
        <div className={classes} {...customProps}>
            {children}
        </div>
    );
};

Card.propTypes = {
    children: PropTypes.any.isRequired,
};

Card.displayName = 'Card';

export default Card;
