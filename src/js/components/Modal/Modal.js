import React from 'react';
import './styles.scss';
import PropTypes from 'prop-types';
import { bclClassNames } from '../../utils/common';

const Modal = ({ children, ...otherProps }) => {
    const classes = bclClassNames('Modal');

    return (
        <div className={classes} {...otherProps}>
            {children}
        </div>
    );
};

Modal.propTypes = {
    children: PropTypes.string.isRequired,
};

Modal.displayName = 'Modal';

export default Modal;
