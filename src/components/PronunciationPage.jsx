import classNames from "classnames";
import React, { useState, useEffect } from "react";

const PronunciationPage = () => {
  const [wordPairs, setWordPairs] = useState([
    ["Coarse", "Course"],
    ["Course", "Course"],
    ["Race", "Raise"],
    ["Race", "Race"],
    ["Bear", "Bare"],
    ["Bear", "Bear"],
    ["Desert", "Dessert"],
    ["Desert", "Desert"],
    ["Break", "Brake"],
    ["Break", "Break"],
    ["Price", "Prize"],
    ["Price", "Price"],
    ["Lose", "to Loose"],
    ["Loose", "Loose"],
    ["Plain", "Plane"],
    ["Plain", "Plain"],
    ["Wool", "Well"],
    ["Well", "Well"],
    ["Wed", "Wood"],
    ["Wed", "Wed"],
  ]);

  const [selectedPair, setSelectedPair] = useState([]);
  const [audioUrl1, setAudioUrl1] = useState("");
  const [audioUrl2, setAudioUrl2] = useState("");
  const [answer, setAnswer] = useState(null);

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

  return (
    <div className="mockup-window border border-gray-400 m-6 md:mx-44">
      <div className="flex justify-center items-center flex-col gap-4 px-4 py-12 border-t border-gray-400">
        <h2 className="text-4xl font-extrabold">Pronunciation</h2>
        <p>Listen to two words and choose the correct answer:</p>
        {audioUrl1 && audioUrl2 && (
          <div className=" flex flex-col gap-4">
            <div className=" flex flex-col gap-4">
              <audio controls>
                <source src={audioUrl1} type="audio/mpeg" />
                Your browser does not support the audio element.
              </audio>
              <audio controls>
                <source src={audioUrl2} type="audio/mpeg" />
                Your browser does not support the audio element.
              </audio>
            </div>
            <div>
              <div className="flex w-full">
                <button
                  onClick={() => handleAnswer("Same")}
                  className={classNames(
                    "grid h-20 flex-grow card bg-base-200 rounded-box place-items-center",
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
                    "grid h-20 flex-grow card bg-base-200 rounded-box place-items-center",
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
        )}
        {answer && (
          <p>
            <b>Words:</b> {selectedPair[0]} - {selectedPair[1]}
          </p>
        )}
      </div>
    </div>
  );
};

export default PronunciationPage;
