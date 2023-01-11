import PropTypes from 'prop-types';
import { useState } from 'react';
import { ReactComponent as Icon } from 'icons/zoom.svg';
import {
  SearchbarCss,
  SearchForm,
  SearchFormButton,
  SearchFormButtonLabel,
  SearchFormInput,
} from './Searchbar.styled';

const Searchbar = ({ onSubmit }) => {
  const [searchValue, setSearchValue] = useState('');

  const inputChange = event => {
    setSearchValue(event.target.value);
  };
  const handleSubmit = event => {
    event.preventDefault();
    onSubmit(searchValue);
    event.target.reset();
  };

  return (
    <SearchbarCss>
      <SearchForm onSubmit={handleSubmit}>
        <SearchFormButton type="submit">
          <Icon />
          <SearchFormButtonLabel>Search</SearchFormButtonLabel>
        </SearchFormButton>

        <SearchFormInput
          name="query"
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          onChange={inputChange}
        />
      </SearchForm>
    </SearchbarCss>
  );
};

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
export default Searchbar;
