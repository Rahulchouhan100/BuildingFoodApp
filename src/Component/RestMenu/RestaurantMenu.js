import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { IMG_URL } from "../../../config.js";
import "./RestMenu.css";
import starIcon from "../../assets/star-1.png";
// import { BsFillStarFill } from "react-icons/Bs";
// import { AiFillStar } from "react-icons/Ai";

const RestaurantMenu = () => {
  const [restaurant, setRestaurant] = useState({});

  const params = useParams();
  const { id } = params;

  useEffect(() => {
    getRestaurantsInfo();
  }, []);

  async function getRestaurantsInfo() {
    try {
      const response = await fetch(
        "https://www.swiggy.com/dapi/menu/v4/full?lat=30.3164945&lng=78.03219179999999&menuId=" +
          id
      );
      const json = await response.json();
      console.log(json.data);
      setRestaurant(json.data);
    } catch (err) {
      console.log(err);
    }
  }

  return !restaurant ? (
    "loading"
  ) : (
    <div className="menu-container">
      <div>
        <img
          src={IMG_URL + restaurant.cloudinaryImageId}
          alt="logo"
          className="menu-img"
        />
        <div>
          <h2>{restaurant.name}</h2>
          <h4>{restaurant.cuisines}</h4>
          <h4>
            {restaurant.area} , {restaurant.city}
          </h4>
          <div>
            <div>
              <span>
                {" "}
                <img src={starIcon} alt="" className="star-icon" />{" "}
              </span>{" "}
              <span className="rating">{restaurant.avgRatingString} </span>
              <br />
              {restaurant.totalRatingsString}
            </div>
            <div>
              {restaurant.sla?.slaString} {restaurant?.badges?.costForTwoMsg}
            </div>
            <div></div>
          </div>
        </div>
      </div>
      <div>
        <div>offer</div>
      </div>

      {/* <h1>this is ResMenu {id} </h1>
      <p>{restaurant.name} </p> */}
    </div>
  );
};

export default RestaurantMenu;
