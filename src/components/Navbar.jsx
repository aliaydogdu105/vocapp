import React from "react";
import ThemeButton from "./ThemeButton";
import { useState, useEffect } from "react";

const Navbar = () => {
  const [isdark, setIsdark] = useState(
    JSON.parse(localStorage.getItem("isdark"))
  );
  useEffect(() => {
    localStorage.setItem("isdark", JSON.stringify(isdark));
  }, [isdark]);
  return (
    <div>
      <div className="navbar bg-base-200 px-10">
        <div className="flex-1">
          <a className="btn btn-ghost text-2xl font-bold">VocApp</a>
        </div>

        {/* Colors */}
        <button className="btn btn-primary">primary</button>
        <button className="btn btn-secondary">secondary</button>
        <button className="btn btn-accent">accent</button>
        <button className="btn btn-neutral">neutral</button>
        <button className="btn btn-base-100">base-100</button>
        <button className="btn btn-info">info</button>
        <button className="btn btn-success">success</button>
        <button className="btn btn-warning">warning</button>
        <button className="btn btn-error">error</button>
        {/* Colors */}

        <ThemeButton isdark={isdark} setIsdark={setIsdark} />
        <div className="flex-none">
          <button className="btn btn-square btn-ghost">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="inline-block w-5 h-5 stroke-current"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"
              ></path>
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
