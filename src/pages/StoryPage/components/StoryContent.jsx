import React from "react";
import PlayPauseButton from "./PlayPauseButton";

const StoryContent = ({
  title,
  storyText,
  moral,
  author,
  isPlaying,
  handlePlay,
  handlePause,
}) => {
  return (
    <>
      <div className="relative">
        <h1 className="text-2xl text-center font-bold italic mb-4">{title}</h1>
        <div className="absolute right-0 top-10">
          <PlayPauseButton
            isPlaying={isPlaying}
            handlePlay={handlePlay}
            handlePause={handlePause}
          />
        </div>
      </div>
      <p className="first-letter:text-6xl first-letter:font-semibold first-letter:text-primary tracking-wide leading-8">
        {storyText}
      </p>
      <div>
        <p className="my-5">
          <strong>Moral:</strong> {moral}
        </p>
        <p className="text-right">
          <strong>Author:</strong> {author}
        </p>
      </div>
    </>
  );
};

export default StoryContent;
