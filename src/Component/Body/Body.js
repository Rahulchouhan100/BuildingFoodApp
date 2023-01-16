import React, { useState } from "react";
import "./Body.css";
import { restaurantList, IMG_URL } from "../../../config";
import { BsSearch } from "react-icons/Bs";
import { BsFillPatchCheckFill } from "react-icons/Bs"
import Coupon from "../../assets/ticket-perforated.svg"
 
const RestCard = ({
  name,
  cuisines,
  cloudinaryImageId,
  totalRatingsString,slaString,costForTwoString  ,aggregatedDiscountInfo
}) => {
  return (
    <>
      <div className="card">
        <img src={IMG_URL + cloudinaryImageId} alt="" className="" />
        <h2>{name}</h2>
        <h3>{cuisines}</h3>
        <div className="food-details">
        <h4>{totalRatingsString} </h4>&middot;
        <p>{slaString}</p> &middot;
        <p>{costForTwoString}</p> <br />
        <span>{ BsFillPatchCheckFill }</span>
        </div>
        <hr />
        <div className="food-details2"><img src={Coupon} alt="" /> <span>{aggregatedDiscountInfo.header}</span></div>  
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