import React from 'react';
import './styles.scss';
import PropTypes from 'prop-types';
import { bclPrefix } from '../../utils/common';

export const SPINNER_SIZES = {
    sm: '1px',
    md: '6px',
    lg: '11px',
};

export const SPINNER_COLORS = {
    brand: 'red',
    blue: 'blue',
};

const Spinner = ({ size, color, inline, ...customProps }) => {
    const classes = bclPrefix('Spinner');

    const styles = {
        display: inline ? 'inline-block' : 'block',
        fontWeight: SPINNER_SIZES[size] || SPINNER_SIZES['md'], // default to md
        color: SPINNER_COLORS[color] || SPINNER_COLORS['brand'], // default to brand
    };

    return <div className={classes} {...customProps} style={styles} />;
};

Spinner.propTypes = {
    /**
     * Size of the spinner. <enum>:(sm, md, lg)
     */
    size: PropTypes.oneOf(Object.keys(SPINNER_SIZES)).isRequired,

    /**
     * Color of the spinner.
     */
    color: PropTypes.oneOf(Object.keys(SPINNER_COLORS)),

    /**
     * Whether or not the spinner is inline.
     */
    inline: PropTypes.bool,
};

export default Spinner;
