import { useEffect, useState } from 'react';
import { Searchbar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Button } from './Button/Button';
import { Loader } from './Loader/Loader';
import { Modal } from './Modal/Modal';
import { Api } from '../services/api';

export const App = () => {
  const [page, setPage] = useState(1);
  const [images, setImages] = useState([]);
  const [query, setQuery] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [showButton, setShowButton] = useState(false);
  const [largeImage, setLargeImage] = useState('');
  useEffect(() => {
    if (!query){
      return
    }
    const getImages = async () => {
      setShowButton(false);
      try {
        setIsLoading(true);
        const { hits, total } = await Api({
          page,
          query,
        });
        setImages(prev => [...prev, ...hits]);
        page < Math.ceil(total / 12) && setShowButton(true);
      } catch (error) {
        console.log(error.message);
      } finally {
        setIsLoading(false);
      }
    };
    getImages();
  }, [page, query]);

  const onButtonClick = () => {
    setPage(prevState => (
    prevState + 1
    ));
  };
  const ModalOpen = image => {
    setLargeImage(image)
  };
  const onSubmit = str => {
    if (str === query) return;
    setPage(1);
    setQuery(str);
    setImages([]);
  };



  return (
    <>
      <Searchbar onSubmit={onSubmit} />
      {images.length !== 0 && (
        <ImageGallery images={images} onClick={setLargeImage} />
      )}
      {isLoading && (<Loader />)}
      {largeImage.length > 0 && <Modal  largeImage={largeImage} ModalOpen={ModalOpen} />}
      {showButton && <Button onButtonClick={onButtonClick} />}
    </>
  );
};