import React, { useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { addData, clearData } from "../../../store/dataDefinitions/dataSlice";
import { setWord } from "../../../store/wordDefinitions/wordSlice";

const InputPart = () => {
  const [isSearching, setIsSearching] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const word = useSelector((state) => state.word);
  const data = useSelector((state) => state.data);
  const dispatch = useDispatch();

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
      dispatch(setWord(""));
      return;
    }
    try {
      setIsSearching(true);
      const response = await axios.get(`${apiUrl}/${word}`);
      dispatch(addData(response.data));
      setErrorMessage("");
    } catch (error) {
      console.error("Error fetching data:", error);
      setErrorMessage("No data. Try again...");
    }
    setIsSearching(false);
    dispatch(setWord(""));
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  const handleClearData = () => {
    dispatch(clearData());
  };

  return (
    <div className="flex gap-2 relative mb-2">
      <input
        type="text"
        placeholder={errorMessage || "Type here"}
        value={word}
        onChange={(e) => {
          dispatch(setWord(e.target.value));
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
      {data.length > 0 && (
        <button className="btn btn-error" onClick={handleClearData}>
          Clear All
        </button>
      )}
    </div>
  );
};

export default InputPart;
