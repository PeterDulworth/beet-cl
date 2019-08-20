import React from 'react';
import './styles.scss';
import PropTypes from 'prop-types';
import { prefixClassNames } from '../../utils/common';

const Anchor = ({ children, href, newTab, ...otherProps }) => {
    const classes = prefixClassNames('bcl-Anchor');
    const newTabSettings = newTab 
        ? { target: '_blank',  rel: 'noopener noreferrer' } 
        : {};
    
    return (
        <a className={classes} href={href} {...newTabSettings} {...otherProps}>
            {children}
        </a>
    );
};

Anchor.propTypes = {
    children: PropTypes.string.isRequired,
    href: PropTypes.string.isRequired,
    newTab: PropTypes.bool.isRequired,
};

export default Anchor;
