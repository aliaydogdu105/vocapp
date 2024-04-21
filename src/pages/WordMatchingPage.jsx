import classNames from "classnames";
import React, { useEffect, useState } from "react";

const words = [
  {
    id: 1,
    english: "apple",
    turkish: "elma",
    done: false,
    clickEng: false,
    clickTur: false,
  },
  {
    id: 2,
    english: "banana",
    turkish: "muz",
    done: false,
    clickEng: false,
    clickTur: false,
  },
  {
    id: 3,
    english: "cat",
    turkish: "kedi",
    done: false,
    clickEng: false,
    clickTur: false,
  },
  {
    id: 4,
    english: "dog",
    turkish: "köpek",
    done: false,
    clickEng: false,
    clickTur: false,
  },
  {
    id: 5,
    english: "car",
    turkish: "araba",
    done: false,
    clickEng: false,
    clickTur: false,
  },
  {
    id: 6,
    english: "dust",
    turkish: "toz",
    done: false,
    clickEng: false,
    clickTur: false,
  },
];

const shuffleArray = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};

const WordMatchingPage = () => {
  const [wordPairs, setWordPairs] = useState(words);
  const [shuffledEnglishWords, setShuffledEnglishWords] = useState([]);
  const [shuffledTurkishWords, setShuffledTurkishWords] = useState([]);

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
  }, []);

  const handleEngWordClick = (index) => {
    const updatedWordPairs = [...wordPairs];
    updatedWordPairs[index].clickEng = !updatedWordPairs[index].clickEng;
    setWordPairs(updatedWordPairs);
  };

  const handleTurWordClick = (index) => {
    const updatedWordPairs = [...wordPairs];
    updatedWordPairs[index].clickTur = !updatedWordPairs[index].clickTur;
    setWordPairs(updatedWordPairs);
  };

  console.log(wordPairs);

  return (
    <div className="flex flex-col justify-center items-center gap-5 px-4">
      <h1 className="text-2xl sm:text-3xl font-bold mt-8">
        Word Matching Game
      </h1>
      <div className="flex gap-4 sm:gap-0">
        <div className="flex justify-center items-center gap-5 flex-wrap">
          {shuffledEnglishWords.map((word, index) => (
            <div
              key={index}
              onClick={() => handleEngWordClick(index)}
              className={classNames(
                "card w-full sm:w-3/4 md:w-1/2 h-32 grid place-content-center bg-base-200 border border-base-300 shadow-xl hover:bg-base-300 active:scale-95",
                {
                  "border-4 border-blue-500":
                    wordPairs[index].clickEng === true,
                }
              )}
            >
              <div className="card-body">{word}</div>
            </div>
          ))}
        </div>
        <div className="flex justify-center items-center gap-5 flex-wrap">
          {shuffledTurkishWords.map((word, index) => (
            <div
              key={index}
              onClick={() => handleTurWordClick(index)}
              className={classNames(
                "card w-full sm:w-3/4 md:w-1/2 h-32 grid place-content-center bg-base-200 border border-base-300 shadow-xl hover:bg-base-300 active:scale-95",
                {
                  "border-4 border-blue-500":
                    wordPairs[index].clickTur === true,
                }
              )}
            >
              <div className="card-body">{word}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WordMatchingPage;
