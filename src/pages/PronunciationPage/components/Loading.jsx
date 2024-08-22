import React from "react";

const Loading = () => {
  return (
    <div
      role="img"
      aria-label="Loading"
      className="flex justify-center items-center text-gray-400 text-xl"
    >
      <span className="loading loading-bars loading-md"></span>
    </div>
  );
};

export default Loading;
