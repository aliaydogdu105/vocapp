import React, { useEffect, useRef, useState } from "react";
import { FaPause, FaPlay } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { clearStory } from "../../store/story/storySlice";
import { fetchStory } from "../../store/story/storyThunks";
import NewStoryButton from "./components/NewStoryButton";
import Loading from "../../components/Loading";
import StoryContent from "./components/StoryContent";

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
          <Loading />
        ) : (
          story && (
            <StoryContent
              title={story.title}
              storyText={story.story}
              moral={story.moral}
              author={story.author}
              isPlaying={isPlaying}
              onPlay={handlePlay}
              onPause={handlePause}
            />
          )
        )}
      </div>
      {!loading && <NewStoryButton onClick={handleFetchStory} />}
    </div>
  );
};

export default StoryPage;
