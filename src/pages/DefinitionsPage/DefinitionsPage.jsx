import React from "react";
import InputPart from "./components/InputPart";
import { useSelector } from "react-redux";

const DefinitionsPage = () => {
  const data = useSelector((state) => state.data);

  console.log(data)

  return (
    <div className="flex justify-center items-start mt-10">
      <div className="flex flex-col justify-center items-center gap-4 w-11/12">
        <InputPart />
        {data.length > 0 &&
          data
            .map((entry, index) => (
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
            ))
            .reverse()}
      </div>
    </div>
  );
};

export default DefinitionsPage;
