import classNames from "classnames";
import React, { useState, useEffect } from "react";
import wordPairs from "../helpers/wordPairs";

const PronunciationPage = () => {
  const [selectedPair, setSelectedPair] = useState([]);
  const [audioUrl1, setAudioUrl1] = useState("");
  const [audioUrl2, setAudioUrl2] = useState("");
  const [answer, setAnswer] = useState(null);
  const [loading, setLoading] = useState(false);

  const apiUrl = import.meta.env.VITE_BASE_URL;
  //.env file added

  useEffect(() => {
    // Select a random pair
    const selectedPair = getRandomPair(wordPairs);

    // Fetch audio URLs for the two words
    fetchAudioUrl(selectedPair[0], setAudioUrl1);
    fetchAudioUrl(selectedPair[1], setAudioUrl2);

    // Update state
    setSelectedPair(selectedPair);
    setAnswer(null);
  }, [wordPairs]);

  const getRandomPair = (wordPairs) => {
    const randomIndex = Math.floor(Math.random() * wordPairs.length);
    return wordPairs[randomIndex];
  };

  const fetchAudioUrl = async (word, setAudioUrl) => {
    try {
      const response = await fetch(`${apiUrl}/${word}`);
      const data = await response.json();
      const audioUrl = data[0]?.phonetics[0]?.audio || "";
      setAudioUrl(audioUrl);
    } catch (error) {
      console.error("Error during API request:", error);
    }
  };

  const handleAnswer = (userAnswer) => {
    if (userAnswer === "Same" && selectedPair[0] === selectedPair[1]) {
      setAnswer("Correct1");
    } else if (
      userAnswer === "Different" &&
      selectedPair[0] !== selectedPair[1]
    ) {
      setAnswer("Correct2");
    } else if (userAnswer === "Same" && selectedPair[0] !== selectedPair[1]) {
      setAnswer("Wrong1");
    } else if (
      userAnswer === "Different" &&
      selectedPair[0] === selectedPair[1]
    ) {
      setAnswer("Wrong2");
    }
  };

  const selectRandomPair = () => {
    setLoading(true);
    setTimeout(() => {
      const randomIndex = Math.floor(Math.random() * wordPairs.length);
      const selectedPair = wordPairs[randomIndex];
      setSelectedPair(selectedPair);
      setAnswer(null);
      fetchAudioUrl(selectedPair[0], setAudioUrl1);
      fetchAudioUrl(selectedPair[1], setAudioUrl2);
      setLoading(false);
    }, 2000);
  };

  const rollDice = () => {
    selectRandomPair();
    const audio = new Audio("/src/assets/audio/dice_roll_sound.mp3");
    audio.play();
  };

  return (
    <div className="h-[calc(100vh-68px)] flex justify-center items-center transition-all">
      <div className="mockup-window border border-gray-400 min-w-64 m-6 sm:w-2/3 2xl:w-1/2">
        <div className="flex justify-center items-center flex-col gap-4 px-4 py-8 border-t border-gray-400">
          <h2 className="text-3xl sm:text-4xl font-bold">Pronunciation</h2>
          <p>Listen to two words and choose the correct answer:</p>
          {audioUrl1 && audioUrl2 ? (
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
              <div className="flex justify-center items-center">
                <div className="flex justify-center items-center w-11/12 sm:w-full">
                  <button
                    onClick={() => handleAnswer("Same")}
                    className={classNames(
                      "grid w-28 h-16 flex-grow card bg-base-200 rounded-box place-items-center outline outline-1 hover:outline-2",
                      {
                        "bg-green-500": answer === "Correct1",
                        "bg-red-500": answer === "Wrong1",
                      }
                    )}
                  >
                    Same
                  </button>
                  <div className="divider divider-horizontal">or</div>
                  <button
                    onClick={() => handleAnswer("Different")}
                    className={classNames(
                      "grid w-28 h-16 flex-grow card bg-base-200 rounded-box place-items-center outline outline-1 hover:outline-2",
                      {
                        "bg-green-500": answer === "Correct2",
                        "bg-red-500": answer === "Wrong2",
                      }
                    )}
                  >
                    Different
                  </button>
                </div>
              </div>
            </div>
          ) : (
            <p className=" italic font-semibold">
              Roll the dice again, please.
            </p>
          )}
          {answer && (
            <p className="skeleton bg-success p-3 text-base-100">
              <b>Words:</b> {selectedPair[0]} - {selectedPair[1]}
            </p>
          )}
        </div>
        <button
          onClick={selectRandomPair}
          className="flex justify-center items-center bg-neutral h-12 text-3xl"
        >
          <div
            className="flex justify-center items-center h-full w-28"
            onClick={rollDice}
          >
            {loading ? (
              <div
                role="img"
                aria-label="Loading"
                className=" animate-pulse text-gray-400 text-xl"
              >
                Loading...
              </div>
            ) : (
              <div
                role="img"
                aria-label="Roll Dice"
                className="hover:animate-bounce"
              >
                🎲
              </div>
            )}
          </div>
        </button>
      </div>
    </div>
  );
};

export default PronunciationPage;
