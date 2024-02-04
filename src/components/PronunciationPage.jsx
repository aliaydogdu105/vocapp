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
    ["Lose", "Loose"],
    ["Loose", "Loose"],
    ["Plain", "Plane"],
    ["Plain", "Plain"],
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
      const response = await fetch(
        `${apiUrl}/${word}`
      );
      const data = await response.json();
      const audioUrl = data[0]?.phonetics[0]?.audio || "";
      setAudioUrl(audioUrl);
    } catch (error) {
      console.error("Error during API request:", error);
    }
  };

  const handleAnswer = (userAnswer) => {
    if (userAnswer === "Same" && selectedPair[0] === selectedPair[1]) {
      setAnswer("Correct");
    } else if (
      userAnswer === "Different" &&
      selectedPair[0] !== selectedPair[1]
    ) {
      setAnswer("Correct");
    } else {
      setAnswer("Wrong");
    }
  };

  return (
    <div>
      <h2>Pronunciation</h2>
      <p>Listen to two words and choose the correct answer:</p>
      {audioUrl1 && audioUrl2 && (
        <div>
          <div>
            <audio controls>
              <source src={audioUrl1} type="audio/mpeg" />
              Your browser does not support the audio element.
            </audio>
            <button
              onClick={() => handleAnswer("Same")}
              style={{
                backgroundColor:
                  answer === "Correct" && selectedPair[0] === selectedPair[1]
                    ? "green"
                    : "white",
              }}
            >
              Same
            </button>
          </div>
          <div>
            <audio controls>
              <source src={audioUrl2} type="audio/mpeg" />
              Your browser does not support the audio element.
            </audio>
            <button
              onClick={() => handleAnswer("Different")}
              style={{ backgroundColor: answer === "Wrong" ? "red" : "white" }}
            >
              Different
            </button>
          </div>
        </div>
      )}
      {answer === "Correct" && <p style={{ color: "green" }}>Perfect!</p>}
      {answer === "Wrong" && <p style={{ color: "red" }}>Sorry!</p>}
    </div>
  );
};

export default PronunciationPage;
