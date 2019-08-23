import React from 'react';
import './styles.scss';
import PropTypes from 'prop-types';
import { bclPrefix } from '../../utils/common';

/**
 * A reusable component to simplify inline SVG.
 * https://blog.lftechnology.com/using-svg-icons-components-in-react-44fbe8e5f91
 * TODO: add option for non inline SVG
 */
const SVG = ({ path, viewBox, size, color, lockAspectRatio = true, className }) => {
    const classes = `${bclPrefix('SVG')} ${className}`;

    // x[Min | Mid | Max]y[Min | Mid | Max] meet | slice
    const scale = lockAspectRatio ? 'xMidYMid meet' : 'none';

    return (
        <svg
            className={classes}
            version='1.1'
            viewBox={`0 0 ${viewBox.width} ${viewBox.height}`}
            preserveAspectRatio={scale}
            style={{ fill: color, width: size.width, height: size.height }}
            xmlns='http://www.w3.org/2000/svg'
            xmlnsXlink='http://www.w3.org/1999/xlink'
        >
            <path d={path} />
        </svg>
    );
};

SVG.displayName = 'SVG';

SVG.propTypes = {
    /**
     * The SVG path. Defines the content of the SVG.
     */
    path: PropTypes.string.isRequired,

    /**
     * The dimensions of the SVG view-box. This is used to determine the aspect ratio.
     * This should match the view-box in the SVG specification.
     */
    viewBox: PropTypes.shape({
        width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
        height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    }).isRequired,

    /**
     * The size with which to display the SVG. Unlike viewBox this can be scaled
     * up or down from the SVG specification.
     */
    size: PropTypes.shape({
        width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
        height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    }).isRequired,

    /**
     * Whether or not to lock the aspect ratio when scaling.
     * Defaults to true.
     */
    lockAspectRatio: PropTypes.bool,

    /**
     * The fill color of the SVG.
     */
    color: PropTypes.string,

    /**
     * Optional classname for custom styles.
     */
    className: PropTypes.string,
};

export default SVG;
