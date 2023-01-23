import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { IMG_URL } from "../../../config.js";

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
    <div>
      <h1>this is ResMenu {id} </h1>
      <p>{restaurant.name} </p>
      <img src={IMG_URL + restaurant.cloudinaryImageId} alt="" />
    </div>
  );
};

export default RestaurantMenu;
