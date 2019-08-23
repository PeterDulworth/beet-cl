import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './styles.scss';
import PropTypes from 'prop-types';
import { bclClassNames } from '../../utils/common';

const Modal = ({ isOpen, onClose, children, ...customProps }) => {
    const classes = bclClassNames('Modal');

    return (
        isOpen &&
        ReactDOM.createPortal(
            <div className={classes}>
                <div className='bcl-Modal__overlay' />
                <div className='bcl-Modal__card' {...customProps}>
                    <div onClick={onClose}>X</div>
                    {children}
                </div>
            </div>,
            document.body
        )
    );
};

Modal.propTypes = {
    isOpen: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired,
    children: PropTypes.node.isRequired,
};

Modal.displayName = 'Modal';

export const useModal = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [content, setContent] = useState(null);

    const createModal = (modalBody) => {
        setContent(modalBody);
        setIsOpen(true);
    };

    const closeModal = () => {
        setIsOpen(false);
        setContent(null);
    };

    const modal = (
        <Modal isOpen={isOpen} onClose={closeModal}>
            {content}
        </Modal>
    );

    return [modal, createModal, closeModal];
};

export default Modal;
