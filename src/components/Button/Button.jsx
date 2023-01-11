import PropTypes from 'prop-types';

import { ButtonCss } from './Button.styled';

 const Button = ({ onButtonClick }) => {
  return (
    <ButtonCss onClick={onButtonClick} type="button">
      Load more
    </ButtonCss>
  );
};
Button.propTypes = {
  onButtonClick: PropTypes.func.isRequired,
};
export default Button