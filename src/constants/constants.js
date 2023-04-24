import PropTypes from 'prop-types';

export const BURGER_API_URL = 'https://norma.nomoreparties.space/api';
export const IngredientPropTypes = PropTypes.shape({
  calories: PropTypes.number,
  carbohydrates: PropTypes.number,
  fat: PropTypes.number,
  image: PropTypes.string,
  image_large: PropTypes.string,
  image_mobile: PropTypes.string,
  name: PropTypes.string,
  price: PropTypes.number,
  proteins: PropTypes.number,
  type: PropTypes.string,
  _id: PropTypes.string,
})


