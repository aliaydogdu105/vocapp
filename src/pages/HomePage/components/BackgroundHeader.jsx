import React from "react";

const BackgroundHeader = ({ text }) => {
  return (
    <text className=" absolute text-3xl sm:text-[1.5rem] md:text-3xl text-base-200 left-1/2 -top-1/2 -translate-x-1/2 -z-10 tracking-widest opacity-50">
      {text}
    </text>
  );
};

export default BackgroundHeader;
