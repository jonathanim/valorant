import React from "react";
import YouTube from "react-youtube";
const LandingPage = () => {
  const opts = {
    height: "490",
    width: "740",
    playerVars: {
      autoplay: 0,
    },
  };
  const onReadyP = (event) => {
    event.target.pauseVideo();
  };

  return (
    <div className="container mx-auto ">
      <h1 className="text-center text-4xl my-5">Welcome to VALOLIFE</h1>
      <div className="grid items-center justify-center">
        <h2 className="text-center text-2xl my-2">Trailer #1</h2>
        <YouTube
          videoId="7xBBuwyx4s8"
          opts={opts}
          onReady={(e) => () => onReadyP}
          className="border-4 p-3 bg-black"
        />
      </div>
    </div>
  );
};

export default LandingPage;
