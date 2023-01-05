import { Component } from 'react';
import { Searchbar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Button } from './Button/Button';
import { Loader } from './Loader/Loader';
import { Modal } from './Modal/Modal';
import { Api } from '../services/api';

export class App extends Component {
  state = {
    query: '',
    page: 1,
    isLoading: false,
    images: [],
    modalIsOpen: false,
    modalImage: '',
    showButton: false,
  };
  async componentDidUpdate(_, prevState) {
    const { query, page } = this.state;
    if (prevState.query !== query || prevState.page !== page) {
      this.setState({ showButton: false });
      try {
        this.setIsLoading(true);
        const data = await Api({
          page: page,
          query: query,
        });
        this.updateImages(data.hits);
        page < Math.ceil(data.total / 12) &&
          this.setState({ showButton: true });
      } catch (error) {
        console.log(error.message);
      } finally {
        this.setIsLoading(false);
      }
    }
  }
  updateQuery = str => {
    this.setState({ query: str });
  };
  setPageToOne = () => {
    this.setState({ page: 1 });
  };
  onButtonClick = () => {
    this.setState(prevState => ({ page: prevState.page + 1 }));
  };
  setModalImage = str => {
    this.setState({ modalImage: str });
  };
  setModalIsOpen = bool => {
    this.setState({ modalIsOpen: bool });
  };
  updateImages = arr => {
    this.setState(prevState => ({ images: [...prevState.images, ...arr] }));
  };
  setIsLoading = bool => {
    this.setState({ isLoading: bool });
  };
  onSubmit = str => {
    if (str === this.state.query) return;
    this.setPageToOne();
    this.updateQuery(str);
    this.setState({
      images: [],
    });
  };

  render() {
    return (
      <>
        <Searchbar onSubmit={this.onSubmit} />
        {this.state.images.length !== 0 && (
          <ImageGallery
            images={this.state.images}
            onClick={[this.setModalImage, this.setModalIsOpen]}
          />
        )}
        {this.state.isLoading && <Loader />}
        {this.state.showButton && <Button onButtonClick={this.onButtonClick} />}
        {this.state.modalIsOpen && (
          <Modal
            largeImage={this.state.modalImage}
            onModalOpen={this.setModalIsOpen}
          />
        )}
      </>
    );
  }
}
