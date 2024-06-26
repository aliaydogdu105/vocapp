import React from "react";
import ThemeButton from "../components/ThemeButton";
import { useState, useEffect } from "react";
import PronunciationPage from "./PronunciationPage";
import { NavLink, Route, Routes } from "react-router-dom";
import DefinitionsPage from "./DefinitionsPage";
import WordMatchingPage from "./WordMatchingPage";

const Navbar = () => {
  const [isdark, setIsdark] = useState(
    JSON.parse(localStorage.getItem("isdark"))
  );
  useEffect(() => {
    localStorage.setItem("isdark", JSON.stringify(isdark));
  }, [isdark]);
  return (
    <>
      <div className="drawer">
        <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col">
          {/* Navbar */}
          <div className="w-full navbar bg-base-200 sm:px-8">
            <div className="flex-none lg:hidden">
              <label
                htmlFor="my-drawer-3"
                aria-label="open sidebar"
                className="btn btn-square btn-ghost"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  className="inline-block w-6 h-6 stroke-current"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  ></path>
                </svg>
              </label>
            </div>
            <div className="flex-1 px-2 mx-2 font-semibold text-2xl">
              <NavLink to="/">VocApp</NavLink>
            </div>
            <div className="flex-none hidden lg:block">
              {/* Navbar menu content here */}
              <ul className="menu menu-horizontal">
                <li>
                  <NavLink to="/pronunciation">Pronunciation</NavLink>
                </li>
                <li>
                  <NavLink to="/definitions">Definitions</NavLink>
                </li>
                <li>
                  <NavLink to="/word-matching">Match Words</NavLink>
                </li>
              </ul>
            </div>
            <ThemeButton isdark={isdark} setIsdark={setIsdark} />
          </div>
          {/* Page content here */}
          <Routes>
            <Route path="/" element={<PronunciationPage />} />
            <Route path="/pronunciation" element={<PronunciationPage />} />
            <Route path="/definitions" element={<DefinitionsPage />} />
            <Route path="/word-matching" element={<WordMatchingPage />} />
          </Routes>
        </div>
        <div className="drawer-side">
          <label
            htmlFor="my-drawer-3"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          {/* Sidebar content here */}
          <ul className="menu p-4 w-1/2 min-h-full bg-base-200">
            <li>
              <NavLink to="/pronunciation">Pronunciation</NavLink>
            </li>
            <li>
              <NavLink to="/definitions">Definitions</NavLink>
            </li>
            <li>
              <NavLink to="/word-matching">Match Words</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;
