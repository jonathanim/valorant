import React from "react";
import image from "./Reload-1s-200px.gif";

const Loading = () => {
  return (
    <div className="container mx-auto items-center justify-center">
      <img src={image} alt="loading" />
    </div>
  );
};

export default Loading;
