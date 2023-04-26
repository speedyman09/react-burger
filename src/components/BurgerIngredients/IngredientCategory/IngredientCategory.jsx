import PropTypes from 'prop-types';
import Ingredient from "../Ingredient/Ingredient";
import { forwardRef } from 'react';

const IngredientCategory = forwardRef((
  { category, heading, listStyle, textStyle }, ref) => {
  return (
    <div ref={ref}>
      <h3 className={textStyle}>{heading}</h3>
      <ul className={listStyle}>
        {category.map((element) => {
          return (
            <Ingredient
              count={0}
              ingredient={element}
              key={element._id}
            />
          )
        }
        )}
      </ul>
    </div>
  )
})

IngredientCategory.propTypes = {
  category: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      proteins: PropTypes.number.isRequired,
      calories: PropTypes.number.isRequired,
      carbohydrates: PropTypes.number.isRequired,
      fat: PropTypes.number.isRequired,
      price: PropTypes.number.isRequired,
    })
  ).isRequired,
  heading: PropTypes.string.isRequired,
  listStyle: PropTypes.string.isRequired,
  textStyle: PropTypes.string.isRequired
}

export default IngredientCategory;