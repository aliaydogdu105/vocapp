import React, { useEffect, useRef, useState } from "react";
import { FaPause, FaPlay } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { clearStory } from "../../store/story/storySlice";
import { fetchStory } from "../../store/story/storyThunks"; 

const StoryPage = () => {
  const dispatch = useDispatch();
  const { story, loading, error } = useSelector((state) => state.story);
  const [isPlaying, setIsPlaying] = useState(false);
  const utteranceRef = useRef(null);
  const apiStory = import.meta.env.VITE_STORY_URL;

  const handleFetchStory = () => {
    dispatch(fetchStory(apiStory));
    setIsPlaying(false);
    window.speechSynthesis.cancel();
    utteranceRef.current = null;
  };

  const handlePlay = () => {
    if (story) {
      if (!utteranceRef.current) {
        const utterance = new SpeechSynthesisUtterance();
        utterance.text = `${story.title}. ${story.story}. Moral: ${story.moral}. Author: ${story.author}`;
        utterance.lang = "en-US";
        utterance.rate = 0.9;
        utterance.onend = () => {
          setIsPlaying(false);
        };
        utteranceRef.current = utterance;
        window.speechSynthesis.speak(utteranceRef.current);
      } else if (!isPlaying) {
        window.speechSynthesis.resume();
      }
      setIsPlaying(true);
    }
  };

  const handlePause = () => {
    if (isPlaying) {
      window.speechSynthesis.pause();
      setIsPlaying(false);
    }
  };

  useEffect(() => {
    handleFetchStory();

    return () => {
      window.speechSynthesis.cancel();
      dispatch(clearStory());
    };
  }, [dispatch]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4">
      <div className="w-full max-w-3xl text-base shadow-lg rounded-lg p-6">
        {error && <p className="text-red-500">{error}</p>}
        {loading ? (
          <div className="grid place-content-center">
            <span className="loading loading-dots loading-lg scale-150"></span>
          </div>
        ) : (
          story && (
            <div>
              <div className=" relative">
                <h1 className="text-2xl text-center font-bold italic mb-4">
                  {story.title}
                </h1>
                <div className=" absolute right-0 top-10">
                  {isPlaying ? (
                    <button
                      onClick={handlePause}
                      className="px-3 py-3 bg-yellow-500 text-white rounded-full shadow-md hover:scale-105 active:scale-95 transition duration-200"
                    >
                      <FaPause />
                    </button>
                  ) : (
                    <button
                      onClick={handlePlay}
                      className="px-3 py-3 bg-green-500 text-white rounded-full shadow-md hover:scale-105 active:scale-95 transition duration-200"
                    >
                      <FaPlay />
                    </button>
                  )}
                </div>
              </div>
              <p className="first-letter:text-6xl first-letter:font-semibold first-letter:text-primary tracking-wide leading-8">
                {story.story}
              </p>
              <div>
                <p className="my-5">
                  <strong>Moral:</strong> {story.moral}
                </p>
                <p className="text-right">
                  <strong>Author:</strong> {story.author}
                </p>
              </div>
            </div>
          )
        )}
      </div>
      {!loading && (
        <>
          <button
            onClick={handleFetchStory}
            className="my-5 px-4 py-2 bg-primary rounded-lg shadow-md hover:scale-105 active:scale-95 transition duration-200"
          >
            Get Another Story
          </button>
        </>
      )}
    </div>
  );
};

export default StoryPage;
