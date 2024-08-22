import React from "react";

const AudioButtons = ({ audioUrl1, audioUrl2 }) => {
  return (
    <div className=" flex flex-col gap-4">
      <div className=" flex justify-around gap-10">
        <div
          className="bg-info flex justify-center items-center cursor-pointer hover:scale-105 rounded-full w-16 h-12"
          onClick={() => {
            const audio = new Audio(audioUrl1);
            audio.play();
          }}
        >
          <span role="button" aria-label="Speaker">
            🔊
          </span>
        </div>
        <div
          className="bg-info flex justify-center items-center cursor-pointer hover:scale-105 rounded-full w-16 h-12"
          onClick={() => {
            const audio = new Audio(audioUrl2);
            audio.play();
          }}
        >
          <span role="button" aria-label="Speaker">
            🔊
          </span>
        </div>
      </div>
    </div>
  );
};

export default AudioButtons;
