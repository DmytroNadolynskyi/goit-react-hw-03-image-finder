import PropTypes from 'prop-types';
import { useEffect } from 'react';
import { Overlay, ModalCss } from './Modal.styled';

const Modal = ({ modalOpen, largeImage }) => {
  useEffect(() => {
    const onEscClick = e => {
      if (e.code !== 'Escape') {
        return;
      }
      modalOpen('');
    };

    window.addEventListener('keydown', onEscClick);

    return () => {
      window.removeEventListener('keydown', onEscClick);
    };
  }, [modalOpen]);

  const onBackdropClick = e => {
    if (e.target === e.currentTarget) {
      modalOpen('');
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
  modalOpen: PropTypes.func.isRequired,
};
export default Modal;
