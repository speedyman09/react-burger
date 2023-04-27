import styles from './BurgerConstructor.module.css';
import PropTypes from 'prop-types';
import { TopBun } from './TopBun/TopBun';
import { BottomBun } from './BottomBun/BottomBun';
import { Button } from "@ya.praktikum/react-developer-burger-ui-components/dist/ui/button";
import { CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components/dist/ui/icons";
import { setOrderData } from "../../services/actions/order";
import { SELECT_INGREDIENT, sortIngredients } from '../../services/actions/ingredients';
import { useMemo, useCallback } from "react";
import { changeOrderModalStatus } from '../../services/reducers/orderReducer';
import { deleteAllIngredients } from '../../services/actions/ingredients';
import { useSelector, useDispatch } from 'react-redux';
import { useDrop } from "react-dnd";
import { SelectedIngredient } from "./SelectedIngredient/SelectedIngredient";
import Modal from '../Modal/modal.jsx';
import OrderDetails from '../Modal/OrderDetails/OrderDetails';

function BurgerConstructor({ closePopup }) {
  const dispatch = useDispatch();

  const burgerData = useSelector(state => state.ingredients.ingredients);
  const selectedIngredients = useSelector(state => state.ingredients.selectedIngredients);

  const notBun = useMemo(() => selectedIngredients.filter((ingredient) => ingredient.type !== 'bun'), [selectedIngredients]);
  const bun = useMemo(() => selectedIngredients.find((ingredient) => ingredient.type === 'bun'), [selectedIngredients]);

  const orderDetails = useSelector(state => state.orderData.orderDetails);
  const isOrderModalOpen = useSelector(state => state.orderData.isOrderDetailsModalOpen);

  const sum = useMemo(() => {
    return selectedIngredients.reduce(
      (acc, ingredient) =>
        ingredient === bun ? acc + ingredient.price * 2 : acc + ingredient.price, 0);
  }, [selectedIngredients, bun]);
  
  const onOrderClick = () => {
    const dataId = selectedIngredients.map((element) => element._id);
    dispatch(setOrderData(dataId));
    dispatch(changeOrderModalStatus(true));
    dispatch(deleteAllIngredients(selectedIngredients));
  };

  const handleDrop = (item) => {
    const selectedIngredient = burgerData.find(ingredient => ingredient._id === item._id);
    dispatch({
      type: SELECT_INGREDIENT,
      payload: [...selectedIngredients, selectedIngredient]
    })
  };

  const [{ isHover }, dropRef] = useDrop({
    accept: 'ingredient',
    collect: monitor => ({
      isHover: monitor.isOver()
    }),
    drop(item) {
      handleDrop(item)
    },
  });
 
  const moveIngredients = useCallback((dragIndex, hoverIndex, selectedIngredients) => {
    dispatch(sortIngredients(dragIndex, hoverIndex, selectedIngredients));
  }, [dispatch]);

  return (
    <section className={`${styles.section} ${isHover && styles.dropping}`} ref={dropRef}>
      <div className={`mb-10 mt-25`}>
        <TopBun />
        <ul className={'text custom-scroll ' + styles.list}>
          {notBun.map((element, index) => (
            <SelectedIngredient ingredient={element} moveIngredient={moveIngredients} index={index} key={`${element.id}${index}`} />
          ))
          }
        </ul>
        <BottomBun />
      </div>
      {selectedIngredients.length > 0 ?
        <div className={'mr-4 ' + styles.total}>
          <span className={'text text_type_digits-medium mr-10 ' + styles.sum}>{sum}{<CurrencyIcon />}</span>
          <Button size="large" type="primary" htmlType='button' onClick={onOrderClick}>Оформить заказ</Button>
        </div> :
        <div className={'mr-4 ' + styles.total}>
          <span className={'text text_type_digits-medium mr-10 ' + styles.sum}>{sum}{<CurrencyIcon />}</span>
          <Button size="large" type="secondary" htmlType='button' disabled onClick={onOrderClick}>Оформить заказ</Button>
        </div>
      }
      {isOrderModalOpen && orderDetails && (
        <Modal title={''} closePopup={closePopup}>
          <OrderDetails />
        </Modal>
      )}
    </section>

  )
};

BurgerConstructor.propTypes = {
  closePopup: PropTypes.func.isRequired
}

export default BurgerConstructor;