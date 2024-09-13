import React, { useEffect, useState } from "react";
import classNames from "classnames";
import matchingWord from "../../helpers/matchingWords";

const shuffleArray = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};

const WordMatchingPage = () => {
  const [wordPairs, setWordPairs] = useState(matchingWord);
  const [shuffledEnglishWords, setShuffledEnglishWords] = useState([]);
  const [shuffledTurkishWords, setShuffledTurkishWords] = useState([]);
  const [selectedEnglish, setSelectedEnglish] = useState(null);
  const [selectedTurkish, setSelectedTurkish] = useState(null);
  const [shuffe, setShuffe] = useState(false);
  const [isShuffling, setIsShuffling] = useState(false);

  useEffect(() => {
    const selectedWordPairs = shuffleArray(wordPairs).slice(0, 3);
    const shuffledEnglish = shuffleArray(
      selectedWordPairs.map((pair) => pair.english)
    );
    const shuffledTurkish = shuffleArray(
      selectedWordPairs.map((pair) => pair.turkish)
    );
    setShuffledEnglishWords(shuffledEnglish);
    setShuffledTurkishWords(shuffledTurkish);
  }, [shuffe]);

  const getRandomShuffleClass = () => {
    const shuffleClasses = ["shuffling1", "shuffling2", "shuffling3"];
    return shuffleClasses[Math.floor(Math.random() * shuffleClasses.length)];
  };

  const handleEngWordClick = (index) => {
    const word = shuffledEnglishWords[index];
    const pairIndex = wordPairs.findIndex((pair) => pair.english === word);
    const pair = wordPairs[pairIndex];

    // Eğer kelime matched veya clickEng true ise, tıklamaya izin verme
    if (pair.matched || pair.clickEng) {
      return;
    }

    const updatedWordPairs = [...wordPairs];
    updatedWordPairs[pairIndex].clickEng =
      !updatedWordPairs[pairIndex].clickEng;
    setSelectedEnglish(pairIndex);
    setWordPairs(updatedWordPairs);

    if (selectedTurkish !== null) {
      checkMatch(pairIndex, selectedTurkish, updatedWordPairs);
    }
  };

  const handleTurWordClick = (index) => {
    const word = shuffledTurkishWords[index];
    const pairIndex = wordPairs.findIndex((pair) => pair.turkish === word);
    const pair = wordPairs[pairIndex];

    // Eğer kelime matched veya clickTur true ise, tıklamaya izin verme
    if (pair.matched || pair.clickTur) {
      return;
    }

    const updatedWordPairs = [...wordPairs];
    updatedWordPairs[pairIndex].clickTur =
      !updatedWordPairs[pairIndex].clickTur;
    setSelectedTurkish(pairIndex);
    setWordPairs(updatedWordPairs);

    if (selectedEnglish !== null) {
      checkMatch(selectedEnglish, pairIndex, updatedWordPairs);
    }
  };

  const checkMatch = (engIndex, turIndex, updatedWordPairs) => {
    if (
      updatedWordPairs[engIndex].english ===
        updatedWordPairs[turIndex].english &&
      updatedWordPairs[engIndex].turkish === updatedWordPairs[turIndex].turkish
    ) {
      updatedWordPairs[engIndex].matched = true;
      updatedWordPairs[turIndex].matched = true;
      setSelectedEnglish(null);
      setSelectedTurkish(null);
    } else {
      setTimeout(() => {
        updatedWordPairs[engIndex].clickEng = false;
        updatedWordPairs[turIndex].clickTur = false;
        setSelectedEnglish(null);
        setSelectedTurkish(null);
        setWordPairs([...updatedWordPairs]);
      }, 500);
    }
    setWordPairs([...updatedWordPairs]);
  };

  return (
    <div className="flex flex-col justify-center items-center gap-5 p-4">
      <div className=" flex justify-center items-center text-2xl">
        <span>&#8255;</span>
        <h1 className=" sm:text-3xl font-bold mx-2 my-8">Word Matching Game</h1>
        <span>&#8256;</span>
      </div>

      <div className="flex gap-4 sm:gap-0">
        <div className="flex flex-1 justify-center items-center gap-5 flex-wrap">
          {shuffledEnglishWords.map((word, index) => (
            <div
              key={index}
              onClick={() => handleEngWordClick(index)}
              className={classNames(
                "card w-full sm:w-3/4 md:w-1/2 h-32 grid place-content-center bg-base-200 border border-base-300 shadow-xl active:scale-95",
                isShuffling ? getRandomShuffleClass() : "",
                {
                  "border-1 border-blue-500": wordPairs.find(
                    (pair) => pair.english === word
                  )?.clickEng,
                  "border-none bg-green-500 text-black": wordPairs.find(
                    (pair) => pair.english === word
                  )?.matched,
                }
              )}
            >
              <div className="card-body">{word}</div>
            </div>
          ))}
        </div>
        <div className="flex flex-1 justify-center items-center gap-5 flex-wrap">
          {shuffledTurkishWords.map((word, index) => (
            <div
              key={index}
              onClick={() => handleTurWordClick(index)}
              className={classNames(
                "card w-full sm:w-3/4 md:w-1/2 h-32 grid place-content-center bg-base-200 border border-base-300 shadow-xl active:scale-95",
                isShuffling ? getRandomShuffleClass() : "",
                {
                  "border-1 border-blue-500": wordPairs.find(
                    (pair) => pair.turkish === word
                  )?.clickTur,
                  " border-none bg-green-500 text-black": wordPairs.find(
                    (pair) => pair.turkish === word
                  )?.matched,
                }
              )}
            >
              <div className="card-body">{word}</div>
            </div>
          ))}
        </div>
      </div>
      <button
        className=" btn btn-outline mt-5 border-2"
        onClick={() => {
          setShuffe(!shuffe),
            setIsShuffling(true),
            setTimeout(() => setIsShuffling(false), 1000);
        }}
      >
        New Words
      </button>
    </div>
  );
};

export default WordMatchingPage;
