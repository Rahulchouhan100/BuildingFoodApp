import React from "react";
import { useParams } from "react-router-dom";

const RestaurantMenu = () => {
  const params = useParams();
  const { id } = params;

  return (
    <div>
      <h1>this is ResMenu {id} </h1>
    </div>
  );
};

export default RestaurantMenu;
