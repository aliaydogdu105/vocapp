import React from "react";

const StoryCards = ({ name, level, icon }) => {
  return (
    <div className=" flex bg-neutral text-white rounded-2xl py-5 px-4 w-4/5 h-48 sm:w-2/5 xl:w-1/5 shadow-xl relative">
      <div className=" absolute top-1/2 left-1/2 scale-[4] opacity-50">
        {icon}
      </div>
      <div className=" flex w-full">
        <div className=" flex flex-col justify-between ">
          <h2 className=" text-xl font-semibold">{name}</h2>
          <p>{level}</p>
        </div>
        <div className=" flex flex-1 items-end justify-end">
          <button className=" bg-success text-base-200 py-2 px-4 rounded-lg hover:bg-opacity-75 active:scale-95 transition-all">Read</button>
        </div>
      </div>
    </div>
  );
};

export default StoryCards;
