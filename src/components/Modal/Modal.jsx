import PropTypes from 'prop-types';
import { Component } from 'react';
import { Overlay, ModalCss } from './Modal.styled';

export class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.onEscClick);
  }
  componentWillUnmount() {
    window.removeEventListener('keydown', this.onEscClick);
  }

  onBackdropClick = e => {
    if (e.target === e.currentTarget) {
      this.props.onModalOpen(false);
    }
  };

  onEscClick = e => {
    if (e.key !== 'Escape') {
      return;
    }
    this.props.onModalOpen(false);
  };

  render() {
    return (
      <Overlay onClick={this.onBackdropClick}>
        <ModalCss>
          <img src={this.props.largeImage} alt="" />
        </ModalCss>
      </Overlay>
    );
  }
}

Modal.propType = {
  largeImage: PropTypes.string.isRequired,
  onModalOpen: PropTypes.func.isRequired,
};
