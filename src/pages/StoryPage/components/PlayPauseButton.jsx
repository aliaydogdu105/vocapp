import React from "react";
import { FaPause, FaPlay } from "react-icons/fa";

const PlayPauseButton = ({ isPlaying, handlePlay, handlePause }) => (
  <button
    onClick={isPlaying ? handlePause : handlePlay}
    className={`px-3 py-3 text-white rounded-full shadow-md hover:scale-105 active:scale-95 transition duration-200 ${
      isPlaying ? "bg-yellow-500" : "bg-green-500"
    }`}
  >
    {isPlaying ? <FaPause /> : <FaPlay />}
  </button>
);

export default PlayPauseButton;
