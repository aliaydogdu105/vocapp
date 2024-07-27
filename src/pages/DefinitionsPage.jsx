import React, { useState } from "react";
import axios from "axios";

const DefinitionsPage = () => {
  const [word, setWord] = useState("");
  const [data, setData] = useState([]);
  const [isSearching, setIsSearching] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const apiUrl = import.meta.env.VITE_BASE_URL;

  const handleSearch = async () => {
    if (!word.trim()) {
      setErrorMessage("Please enter a word");
      return;
    }
    if (
      data.some((entry) => entry[0]?.word.toLowerCase() === word.toLowerCase())
    ) {
      setErrorMessage("Word already searched");
      setWord("");
      return;
    }
    try {
      setIsSearching(true);
      const response = await axios.get(`${apiUrl}/${word}`);
      setData((prevData) => [...prevData, response.data]);
      setErrorMessage("");
    } catch (error) {
      console.error("Error fetching data:", error);
      setErrorMessage("No data. Try again...");
    }
    setIsSearching(false);
    setWord("");
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <div className=" h-full min-h-screen flex justify-center items-start mt-10">
      <div className="flex flex-col justify-center items-center gap-4 w-11/12">
        <div className="flex gap-2 relative mb-2">
          <input
            type="text"
            placeholder={errorMessage || "Type here"}
            value={word}
            onChange={(e) => {
              setWord(e.target.value);
              setErrorMessage("");
            }}
            onKeyDown={handleKeyPress}
            className={`input input-bordered w-full max-w-xs ${
              errorMessage ? "input-error" : "input-info"
            }`}
          />
          <button className="btn btn-info" onClick={handleSearch}>
            Search
          </button>
          {isSearching && (
            <div className="absolute inset-0 border-2 border-blue-500 animate-ping rounded-lg"></div>
          )}
        </div>
        {data.length > 0 &&
          data.map((entry, index) => (
            <div
              key={index}
              className="hero bg-base-200 max-w-2xl rounded-2xl outline outline-1 m-2"
            >
              <div className="hero-content text-center">
                <div className="max-w-xl">
                  <p className="text-3xl font-bold">{entry[0]?.word}</p>
                  <pre>{entry[0]?.phonetic}</pre>
                  <div className="flex flex-col sm:flex-row w-full gap-2 p-3">
                    <div className="indicator">
                      {entry[0]?.meanings[0]?.partOfSpeech && (
                        <span className="indicator-item indicator-top indicator-start badge badge-secondary">
                          {entry[0]?.meanings[0]?.partOfSpeech}
                        </span>
                      )}
                      {entry[0]?.meanings[0]?.definitions[0]?.definition && (
                        <div className="grid w-60 p-3 bg-base-300 place-items-center">
                          {entry[0]?.meanings[0]?.definitions[0]?.definition}
                        </div>
                      )}
                    </div>
                    <div className="indicator">
                      {entry[0]?.meanings[1]?.partOfSpeech && (
                        <span className="indicator-item indicator-bottom sm:indicator-top indicator-end badge badge-secondary">
                          {entry[0]?.meanings[1]?.partOfSpeech}
                        </span>
                      )}
                      {entry[0]?.meanings[1]?.definitions[0]?.definition && (
                        <div className="grid w-60 p-3 bg-base-300 place-items-center">
                          {entry[0]?.meanings[1]?.definitions[0]?.definition}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )).reverse()}
      </div>
    </div>
  );
};

export default DefinitionsPage;
