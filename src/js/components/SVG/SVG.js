import React from 'react';
import './styles.scss';
import PropTypes from 'prop-types';
import { bclClassNames } from '../../utils/common';

// https://blog.lftechnology.com/using-svg-icons-components-in-react-44fbe8e5f91
// reusable SVG component
const SVG = ({ path, aspectRatio, size, color, lockAspectRatio = true }) => {
    const classes = bclClassNames('SVG');

    // x[Min | Mid | Max]y[Min | Mid | Max] meet | slice
    const scale = lockAspectRatio ? 'xMidYMid meet' : 'none';

    return (
        <svg
            class={classes}
            version='1.1'
            viewBox={`0 0 ${aspectRatio.width} ${aspectRatio.height}`}
            preserveAspectRatio={scale}
            style={{ fill: color, width: size.width, height: size.height }}
            xmlns='http://www.w3.org/2000/svg'
            xmlnsXlink='http://www.w3.org/1999/xlink'
        >
            <path d={path} />
        </svg>
    );
};

SVG.propTypes = {
    children: PropTypes.string.isRequired,
    href: PropTypes.string.isRequired,
    newTab: PropTypes.bool.isRequired,
};

export default SVG;
