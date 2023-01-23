import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { IMG_URL } from "../../../config.js";

const RestaurantMenu = () => {
  const [Restaurant, setRestaurant] = useState({});

  const params = useParams();
  const { id } = params;

  useEffect(() => {
    getRestaurantsInfo();
  }, []);

  async function getRestaurantsInfo() {
    const response = await fetch(
      "https://www.swiggy.com/dapi/menu/v4/full?lat=30.3164945&lng=78.03219179999999&menuId=69769"
    );
    const json = await response.json();
    // console.log(json.data?.cards[0]?.card?.card?.info?.name);
    // setRestaurant(json.data?.cards[0]?.card?.card?.info);
    console.log(json.data);
    setRestaurant(json.data);
  }

  return (
    <div>
      {/* <p>{Restaurant.cards[0].card?.card?.info?.name}</p>
      <p>{Restau}</p> */}
      {/* <p>{Restaurant?.city}</p> */}
      <img src="" alt="" />
      <h1>this is ResMenu {id} </h1>
      {/* <p>{IMG_URL + Restaurant?.cloudinaryImageId}</p> */}
      {/* <p>{Restaurant.name}</p> */}
    </div>
  );
};

export default RestaurantMenu;
