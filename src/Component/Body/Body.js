import React, { useState } from "react";
import "./Body.css";
import { restaurantList, IMG_URL } from "../../../config";
import { BsSearch } from "react-icons/Bs";

const RestCard = ({
  name,
  cuisines,
  cloudinaryImageId,
  lastMileTravelString,
}) => {
  return (
    <>
      <div className="card">
        <img src={IMG_URL + cloudinaryImageId} alt="" className="" />
        <h2>{name}</h2>
        <h3>{cuisines}</h3>
        <h4>{lastMileTravelString} stars</h4>
      </div>
    </>
  );
};


function filterData(searchText,restaurants){
  return restaurants.filter((restaurant) => restaurant.data.name.includes(searchText) )
}

const body = () => {
  const [searchText, setSearchText] = useState("");
  const [restaurants, setrestaurant] = useState(restaurantList);
  return (
    <>
      <div className="search-container">
        <input
          type="text"
          value={searchText}
          placeholder="search..."
          onChange={(e) => setSearchText(e.target.value)}
        />
        <span>
          <BsSearch className="search-icon" 
          onClick={() => {
            //need to filter the data
            //update the state - restaurants variable
            const data = filterData(searchText,restaurants);
            setrestaurant(data);
          }}
           />
        </span>
      </div>
      <div className="main">
        {restaurants.map((restaurant) => {
          return <RestCard {...restaurant.data} />;
        })}
      </div>
    </>
  );
};

export default body;