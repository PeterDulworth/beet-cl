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
    onClick: PropTypes.func.isRequired,
    onMouseOver: PropTypes.func,
    onMouseOut: PropTypes.func,
    primary: PropTypes.bool,
    disabled: PropTypes.bool,
};

Button.displayName = 'Button';

export default Button;
