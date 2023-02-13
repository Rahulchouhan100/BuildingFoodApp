import { useSelector } from "react-redux";
import "./cartitem.css";

const CartItem = () => {
  const store = useSelector((store) => store.cart.items);
  return (
    <div>
      <h1>CartItem {store.length}</h1>
      <h1>hello</h1>
    </div>
  );
};

export default CartItem;
