import { useDispatch, useSelector } from "react-redux";
import "./cartitem.css";
import { IMG_URL } from "../../../config";
import { clearCart } from "../../utils/cartSlice";
import { removeItem } from "../../utils/cartSlice";

const CartItem = () => {
  const store = useSelector((store) => store.cart.items);

  const dispatch = useDispatch();

  const clearCart = () => {
    dispatch(clearCart());
  };
  const removeCart = () => {
    dispatch(removeItem());
  };
  return (
    <div>
      <div className="cartitem-btn">
        <h1>Cart Items - {store.length}</h1>
        <button onClick={() => clearCart()} className="clearCart-btn">
          Clear Cart
        </button>
      </div>

      <div className="cart-card-container">
        {/* // do not use index as a key */}
        {store.map((e, index) => (
          <div className="cart-card" key={index}>
            <img
              src={IMG_URL + e?.cloudinaryImageId}
              alt=""
              className="img-pic"
            />
            <h1>{e?.name}</h1>
            <h2>{Math.round(e?.price / 100)} &#8377; </h2>
            <button onClick={() => removeCart()} className="removeitem-btn">
              Remove item
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CartItem;
