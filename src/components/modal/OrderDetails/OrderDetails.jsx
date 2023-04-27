import styles from "./OrderDetails.module.css";
import { CheckMarkIcon } from "@ya.praktikum/react-developer-burger-ui-components/dist/ui/icons";
import { useSelector } from "react-redux";

function OrderDetails() {
  const orderDetails = useSelector((state) => state.orderData.orderDetails);
  return (
    <div className={styles.card + " pt-15 pb-30 pr-25 pl-25"}>
      <h3 className={styles.order + " text text_type_digits-large mb-8"}>
        {orderDetails.order.number}
      </h3>
      <p className="text text_type_main-medium mb-15">Идентификатор заказа</p>
      <span className={"mb-15"}>
        <CheckMarkIcon type="primary" />
      </span>
      <p className={"text text_type_main-default mb-2 " + styles.burgerName}>
        Ваш {orderDetails.name} начали готовить
      </p>
      <p className="text text_type_main-default text_color_inactive">
        Дождитесь готовности на орбитальной станции
      </p>
    </div>
  );
}

export default OrderDetails;
