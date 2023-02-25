import { useDispatch, useSelector } from "react-redux";
import "./cartitem.css";
import { IMG_URL } from "../../../config";
import { clearCart } from "../../utils/cartSlice";

const CartItem = () => {
  const store = useSelector((store) => store.cart.items);

  const dispatch = useDispatch();

  const removeCart = () => {
    dispatch(clearCart());
  };
  return (
    <div>
      <h1>CartItem {store.length}</h1>
      <button onClick={() => removeCart()}>clear cart</button>

      {store.map((e) => (
        <div>
          <img src={IMG_URL + e?.cloudinaryImageId} alt="" />
          <h1>{e?.name}</h1>
          <h2>{e.badges?.costForTwo}</h2>
        </div>
      ))}
    </div>
  );
};

export default CartItem;
