import React from "react";

const wordPairs = [
  { id: 1, english: "apple", turkish: "elma" },
  { id: 2, english: "banana", turkish: "muz" },
  { id: 3, english: "cat", turkish: "kedi" },
  { id: 4, english: "dog", turkish: "köpek" },
  { id: 5, english: "car", turkish: "araba" },
  { id: 6, english: "dust", turkish: "toz" },
];

const WordMatchingPage = () => {
  return (
    <div className=" flex flex-col justify-center items-center gap-5 mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">Word Matching Game</h1>
      <div className=" flex gap-16">
        <div className=" flex flex-col gap-5">
          {wordPairs.map((card) => (
            <div
              key={wordPairs.id}
              className="card w-48 h-32 grid place-content-center bg-base-200 border border-base-300 shadow-xl"
            >
              <div className="card-body">{card.english}</div>
            </div>
          ))}
        </div>
        <div className=" flex flex-col gap-5 flex-wrap">
          {wordPairs.map((card) => (
            <div
              key={wordPairs.id}
              className="card w-48 h-32 grid place-content-center bg-base-200 border border-base-300 shadow-xl"
            >
              <div className="card-body">{card.turkish}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WordMatchingPage;
