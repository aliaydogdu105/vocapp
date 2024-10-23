import React, { useEffect, useState } from "react";
import axios from "axios";

const StoryPage = () => {
  const [story, setStory] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const apiStory = import.meta.env.VITE_STORY_URL;

  const fetchStory = () => {
    setLoading(true);
    axios
      .get(`${apiStory}`)
      .then((response) => {
        setStory(response.data);
        setError(null);
      })
      .catch((error) => {
        setError("Failed to fetch the story.");
      })
      .finally(() => {
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchStory();
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4">
      <div className="w-full max-w-3xl text-base shadow-lg rounded-lg p-6">
        {error && <p className="text-red-500">{error}</p>}
        {loading ? (
          <span className="absolute top-1/2 left-1/2 loading loading-dots loading-lg scale-150"></span>
        ) : story ? (
          <div>
            <h1 className="text-2xl text-center font-bold italic mb-4">
              {story.title}
            </h1>
            <p className=" first-letter:text-6xl first-letter:font-semibold first-letter:text-primary tracking-wide leading-8">
              {story.story}
            </p>
            <div>
              <p className="my-5">
                <strong>Moral:</strong> {story.moral}
              </p>
              <p className=" text-right">
                <strong>Author:</strong> {story.author}
              </p>
            </div>
          </div>
        ) : (
          <p className="text-gray-500">No story found</p>
        )}
      </div>
      {!loading && (
        <button
          onClick={fetchStory}
          className="my-5 px-4 py-2 bg-primary rounded-lg shadow-md hover:scale-105 active:scale-95 transition duration-200"
        >
          Get Another Story
        </button>
      )}
    </div>
  );
};

export default StoryPage;
