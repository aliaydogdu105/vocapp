import React, { useState } from "react";
import axios from "axios";

const DefinitionsPage = () => {
  const [word, setWord] = useState("");
  const [data, setData] = useState();

  const apiUrl = import.meta.env.VITE_BASE_URL;

  const handleSearch = async () => {
    try {
      const response = await axios.get(`${apiUrl}/${word}`);
      setData(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
    setWord("");
  };

  return (
    <div className="h-[calc(100vh-68px)] flex justify-center items-center">
      <div className=" flex flex-col justify-center items-center gap-4 w-11/12">
        <div className="flex">
          <input
            type="text"
            placeholder="Type here"
            value={word}
            onChange={(e) => setWord(e.target.value)}
            className="input input-bordered input-info w-full max-w-xs"
          />
          <button className="btn btn-info" onClick={handleSearch}>
            Search
          </button>
        </div>
        {data && (
          <div className="hero bg-base-200 max-w-2xl rounded-2xl outline outline-1">
            <div className="hero-content text-center">
              <div className="max-w-xl">
                <p className="text-3xl font-bold">{data[0]?.word}</p>
                <pre>{data[0]?.phonetic}</pre>
                <div className="flex flex-col sm:flex-row w-full gap-2 p-3">
                  <div className="indicator">
                    {data[0]?.meanings[0]?.partOfSpeech && (
                      <span className="indicator-item indicator-top indicator-start badge badge-secondary">
                        {data[0]?.meanings[0]?.partOfSpeech}
                      </span>
                    )}
                    {data[0]?.meanings[0]?.definitions[0]?.definition && (
                      <div className="grid w-60 p-1 bg-base-300 place-items-center">
                        {data[0]?.meanings[0]?.definitions[0]?.definition}
                      </div>
                    )}
                  </div>
                  <div className="indicator">
                    {data[0]?.meanings[1]?.partOfSpeech && (
                      <span className="indicator-item indicator-bottom sm:indicator-top indicator-end badge badge-secondary">
                        {data[0]?.meanings[1]?.partOfSpeech}
                      </span>
                    )}
                    {data[0]?.meanings[1]?.definitions[0]?.definition && (
                      <div className="grid w-60 p-1 bg-base-300 place-items-center">
                        {data[0]?.meanings[1]?.definitions[0]?.definition}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default DefinitionsPage;
