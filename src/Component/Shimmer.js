import React from "react";
import "./Shimmer.css";

const Shimmer = () => {
  return (
    <>
      <div class="shimmer-container">
        {Array(10)
          .fill("")
          .map((e) => (
            <div class="shimmer"></div>
          ))}
      </div>
    </>
  );
};

export default Shimmer;
