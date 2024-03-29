import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { IMG_URL } from "../../../config.js";
import "./RestMenu.css";
import { BsStarFill } from "react-icons/Bs";
import { BiRupee } from "react-icons/Bi";
import { MdLocalOffer } from "react-icons/Md";
import useRestaurant from "../../utils/useRestaurant.js";
import { useDispatch } from "react-redux";
import { additem } from "../../utils/cartSlice.js";

const RestaurantMenu = () => {
  // const [restaurant, setRestaurant] = useState({});

  const { id } = useParams();
  const restaurant = useRestaurant(id);
  const dispatch = useDispatch();
  const handlerItem = (item) => {
    dispatch(additem(item));
  };

  return !restaurant ? (
    "loading"
  ) : (
    <>
      <div className="menu-container">
        <div className="main-container">
          <div className="first-container">
            <div className="img-container">
              <img
                src={IMG_URL + restaurant.cloudinaryImageId}
                alt="logo"
                className="menu-img"
              />
            </div>
            <div className="img-details-container">
              <h2>{restaurant?.name}</h2>
              <h3>{restaurant?.cuisines}</h3>
              <h4>
                {restaurant?.city}, {restaurant?.area}
              </h4>
              <div className="rating-time-cost-container">
                <div className="rating">
                  <span>
                    <BsStarFill /> <span>4.2</span>
                  </span>{" "}
                  <br />
                  <span>{restaurant?.totalRatingsString}</span>
                </div>
                <div className="time">
                  <span>33 mins</span> <br />
                  <span>Delivery Time</span>
                </div>
                <div className="cost">
                  <span>{restaurant.costForTwoMsg}</span> <br />
                  <span>for two</span>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="offers-container">
              <p>OFFER</p>
              <p>
                <MdLocalOffer className="coupon-icon" />
                Flat ₹125 off on orders above ₹249 |<br /> Use code FLAT125
              </p>{" "}
              <br />
              <p>
                <MdLocalOffer className="coupon-icon" />
                50% off | Use WELCOME50
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* <h1>hello I'm Menu {console.log(restaurant?.menu?.items)} </h1> */}
      <div className="menu-items">
        <h2>Food items Recommended</h2>
        <ul>
          {Object.values(restaurant?.menu?.items).map((item) => (
            <>
              <div className="food-items">
                <div>
                  <h2>{item.name}</h2>
                  <p>{item.description}</p>
                  <p>
                    {" "}
                    <span>
                      <BiRupee />
                    </span>
                    {Math.round(item.price / 100)}
                  </p>
                </div>
                <div className="food-add">
                  <img
                    src={IMG_URL + item.cloudinaryImageId}
                    alt=""
                    className="food-add-img"
                  />{" "}
                  <br />
                  <button onClick={() => handlerItem(item)}>ADD +</button>
                </div>
              </div>
            </>
          ))}
        </ul>
      </div>
    </>
  );
};

export default RestaurantMenu;
