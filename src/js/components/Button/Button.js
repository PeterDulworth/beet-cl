import React from 'react';
import './styles.scss';
import PropTypes from 'prop-types';
import { bclClassNames } from '../../utils/common';

const Button = ({
    children,
    onClick,
    onMouseOver,
    onMouseOut,
    primary,
    disabled,
    ...customProps
}) => {
    const classes = bclClassNames('Button');

    return (
        <div className={classes}>
            <button
                {...customProps}
                onClick={onClick}
                onMouseOver={onMouseOver}
                onMouseOut={onMouseOut}
                disabled={disabled}
                primary={primary}
            >
                {children}
            </button>
        </div>
    );
};

Button.propTypes = {
    children: PropTypes.string.isRequired,
};

Button.displayName = 'Button';

export default Button;
