import PropTypes from 'prop-types';
import { useEffect } from 'react';
import { Overlay, ModalCss } from './Modal.styled';

export const Modal = ({ ModalOpen, largeImage }) => {
  useEffect(() => {
    const onEscClick = e => {
      if (e.code !== 'Escape') {
        return;
      }
      ModalOpen('');
    };

    window.addEventListener('keydown', onEscClick);

    return () => {
      window.removeEventListener('keydown', onEscClick);
    };
  }, [ModalOpen]);

  const onBackdropClick = e => {
    if (e.target === e.currentTarget) {
      ModalOpen('');
    }
  };

  return (
    <Overlay onClick={onBackdropClick}>
      <ModalCss>
        <img src={largeImage} alt="" />
      </ModalCss>
    </Overlay>
  );
};

Modal.propType = {
  largeImage: PropTypes.string.isRequired,
  ModalOpen: PropTypes.func.isRequired,
};
