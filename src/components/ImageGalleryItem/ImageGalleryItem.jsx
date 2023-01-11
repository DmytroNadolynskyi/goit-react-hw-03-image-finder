import PropTypes from 'prop-types';
import {
  ImageGalleryItemCss,
  ImageGalleryItemImage,
} from './ImageGalleryItem.styled';

export const ImageGalleryItem = ({ onClick, webformatURL, largeImageURL }) => {
  const onImageClick = e => {
    onClick(e.target.dataset.image);
  };

  return (
    <ImageGalleryItemCss>
      <ImageGalleryItemImage
        onClick={onImageClick}
        data-image={largeImageURL}
        src={webformatURL}
        alt="picture"
      />
    </ImageGalleryItemCss>
  );
};

ImageGalleryItem.propTypes = {
  onClick: PropTypes.func.isRequired,
  largeImageURL: PropTypes.PropTypes.string.isRequired,
  webformatURL: PropTypes.PropTypes.string.isRequired,
};
