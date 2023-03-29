import styles from "./styles.module.css";
import done from "../../../images/done.png";
import PropTypes from 'prop-types';

function OrderDetails({orderId}) {
  OrderDetails.propTypes = {
    orderId: PropTypes.number.isRequired
  }
  return (
    <>
      <h1 className={`${styles.number} text text_type_digits-large mt-4 mb-8`}>
        {orderId}
      </h1>
      <p className="text text_type_main-medium">Идентификатор заказа</p>
      <img src={done} alt="done" className="mt-15 mb-15" />
      <p className="text text_type_main-default">Ваш заказ начали готовить</p>
      <p className="text text_type_main-default text_color_inactive mb-15">
        Дождитесь готовности на орбитальной станции
      </p>
    </>
  );
}

export default OrderDetails;
