import React from "react";

const NewStoryButton = ({handleFetchStory}) => {
  return (
    <button
      onClick={handleFetchStory}
      className="my-5 px-4 py-2 bg-primary rounded-lg shadow-md hover:scale-105 active:scale-95 transition duration-200"
    >
      Get Another Story
    </button>
  );
};

export default NewStoryButton;
