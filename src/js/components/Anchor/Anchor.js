import React from 'react';
import './styles.scss';
import PropTypes from 'prop-types';
import { bclClassNames } from '../../utils/common';

const Anchor = ({ children, href, openNewTab, ...customProps }) => {
    const classes = bclClassNames('Anchor');
    const newTabSettings = openNewTab ? { target: '_blank', rel: 'noopener noreferrer' } : {};

    return (
        <a className={classes} {...customProps} href={href} {...newTabSettings}>
            {children}
        </a>
    );
};

Anchor.propTypes = {
    children: PropTypes.string.isRequired,
    href: PropTypes.string.isRequired,
    openNewTab: PropTypes.bool,
};

export default Anchor;
