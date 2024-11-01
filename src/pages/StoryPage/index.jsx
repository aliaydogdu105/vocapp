import React, { useEffect, useRef, useState } from "react";
import { FaPause, FaPlay } from "react-icons/fa";
import axios from "axios";

const StoryPage = () => {
  const [story, setStory] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const utteranceRef = useRef(null);
  const apiStory = import.meta.env.VITE_STORY_URL;

  const fetchStory = async () => {
    setLoading(true);
    try {
      const response = await axios.get(`${apiStory}`);
      setStory(response.data);
      setError(null);

      window.speechSynthesis.cancel(); // Yeni hikaye geldiğinde sesi iptal et
      utteranceRef.current = null; // Yeni hikaye için referansı sıfırla
      setIsPlaying(false);
    } catch (error) {
      setError(
        "Failed to fetch the story. Refresh the page or try again later."
      );
    } finally {
      setLoading(false);
    }
  };

  const handlePlay = () => {
    if (story) {
      if (!utteranceRef.current) {
        const utterance = new SpeechSynthesisUtterance();
        utterance.text = `${story.title}. ${story.story}. Moral: ${story.moral}. Author: ${story.author}`;
        utterance.lang = "en-US";
        utterance.rate = 0.7;
        utterance.onend = () => {
          setIsPlaying(false);
        };
        utteranceRef.current = utterance;
        window.speechSynthesis.speak(utteranceRef.current);
      } else if (!isPlaying) {
        window.speechSynthesis.resume(); // Devam ettir
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
    fetchStory();

    return () => {
      window.speechSynthesis.cancel();
    };
  }, []);

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
                <div className=" absolute right-0 top-0">
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
            onClick={fetchStory}
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
