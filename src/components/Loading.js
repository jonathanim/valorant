import React from "react";
import image from "./Reload-1s-200px.gif";

const Loading = () => {
  return (
    <div className="container mx-auto text-center">
      <div className="grid mx-auto my-auto items-center justify-center">
        <img src={image} alt="loading" width="350" height="auto" />
      </div>
    </div>
  );
};

export default Loading;
