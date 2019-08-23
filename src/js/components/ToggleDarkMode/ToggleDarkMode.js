import React from 'react';
import './styles.scss';
import PropTypes from 'prop-types';
import { bclPrefix } from '../../utils/common';

const ToggleDarkMode = ({ isDarkMode, handleToggle, ...customProps }) => {
    const baseClassName = bclPrefix('ToggleDarkMode');
    const moonActiveClass = isDarkMode
        ? `${baseClassName}__moon--active`
        : `${baseClassName}__moon--inactive`;
    const sunActiveClass = !isDarkMode
        ? `${baseClassName}__sun--active`
        : `${baseClassName}__sun--inactive`;

    return (
        <div className={baseClassName} onClick={handleToggle} {...customProps}>
            <div className={`${baseClassName}__moon ${moonActiveClass}`} />
            <div className={`${baseClassName}__sun ${sunActiveClass}`} />
        </div>
    );
};

ToggleDarkMode.propTypes = {
    isDarkMode: PropTypes.bool.isRequired,
    handleToggle: PropTypes.func.isRequired,
};

ToggleDarkMode.displayName = 'ToggleDarkMode';

export default ToggleDarkMode;
