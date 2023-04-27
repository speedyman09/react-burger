import { useEffect } from "react";
import ReactDOM from "react-dom";
import { CloseIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import ModalOverlay from "./ModalOverlay/ModalOverlay";
import { useSelector, useDispatch} from "react-redux";
import styles from './Modal.module.css'
import PropTypes from 'prop-types';
import { changeOrderModalStatus } from "../../services/reducers/orderReducer";
import { changeIngredientModalStatus } from "../../services/reducers/ingredientsReducer";

const Modal = ({title, children}) => {
  const dispatch = useDispatch();
  const isOrderModalOpen = useSelector(state => state.orderData.isOrderDetailsModalOpen);

  useEffect(() => {
    const handleEscClose = (evt) => {
      if (evt.key === 'Escape') {
        // closePopup()
        isOrderModalOpen ? dispatch(changeOrderModalStatus(false)) : dispatch(changeIngredientModalStatus(false));
      }
    }
    
    document.addEventListener('keydown', handleEscClose);
    return () => {
      document.removeEventListener('keydown', handleEscClose); 
    } 
    
  }, [isOrderModalOpen, dispatch])
  const handleClick = () => {
    isOrderModalOpen ? dispatch(changeOrderModalStatus(false)) : dispatch(changeIngredientModalStatus(false));
  }
  return ReactDOM.createPortal(
    <>
      <div className={styles.modal}>
        <h3 className='pl-10 pt-10 text text_color_primary text_type_main-large'>{title}</h3>
        <span className={styles.close} onClick={handleClick}>
          <CloseIcon type='primary' />
        </span>
        {children}
      </div>
      <ModalOverlay closePopup={handleClick}/>
    </> ,
    document.getElementById('modal-root')
  )
}
Modal.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.object.isRequired
  
}

export default Modal;