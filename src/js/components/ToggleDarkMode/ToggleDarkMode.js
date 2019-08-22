import React from 'react';
import './styles.scss';
import PropTypes from 'prop-types';
import { bclClassNames } from '../../utils/common';

const ToggleDarkMode = ({ isDarkMode, handleToggle, ...customProps }) => {
    const baseClassName = 'bcl-ToggleDarkMode';
    const moonActiveClass = isDarkMode ? `${baseClassName}__moon--active` : `${baseClassName}__moon--inactive`;
    const sunActiveClass = !isDarkMode ? `${baseClassName}__sun--active` : `${baseClassName}__sun--inactive`;

    return (
        <div className={baseClassName} onClick={handleToggle} {...customProps}>
            {/* <FiMoon className={`${baseClassName}__moon ${moonActiveClass}`} /> */}
            {/* <FiSun className={`${baseClassName}__sun ${sunActiveClass}`} /> */}
        </div>
    );
};

ToggleDarkMode.propTypes = {
    children: PropTypes.string.isRequired,
    href: PropTypes.string.isRequired,
    newTab: PropTypes.bool.isRequired,
};

ToggleDarkMode.displayName = 'ToggleDarkMode';

export default ToggleDarkMode;
