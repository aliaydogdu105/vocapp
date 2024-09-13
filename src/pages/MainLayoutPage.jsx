import React from "react";
import { useState, useEffect } from "react";
import { NavLink, Route, Routes } from "react-router-dom";
import LandingPage from "./HomePage/LandingPage";
import PronunciationPage from "../pages/PronunciationPage/PronunciationPage";
import DefinitionsPage from "../pages/DefinitionsPage/DefinitionsPage";
import WordMatchingPage from "../pages/WordMatchingPage/WordMatchingPage";
import ThemeButton from "../components/ThemeButton";

const Navbar = () => {
  const [isDark, setIsDark] = useState(
    JSON.parse(localStorage.getItem("isDark"))
  );
  useEffect(() => {
    localStorage.setItem("isDark", JSON.stringify(isDark));
  }, [isDark]);

  const handleNavLinkClick = () => {
    document.getElementById("my-drawer-3").checked = false;
  };

  return (
    <>
      <div className="drawer">
        <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col">
          {/* Navbar */}
          <div className="w-full navbar bg-base-200 sm:px-16">
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
            <div className="flex-1 font-semibold text-2xl">
              <NavLink to="/">VocApp</NavLink>
            </div>
            <div className="flex-none hidden pr-5 lg:block">
              {/* Navbar menu content here */}
              <nav className="menu menu-horizontal gap-3">
                <li>
                  <NavLink to="/">Home</NavLink>
                </li>
                <li>
                  <NavLink to="/pronunciation">Pronunciation</NavLink>
                </li>
                <li>
                  <NavLink to="/definitions">Definitions</NavLink>
                </li>
                <li>
                  <NavLink to="/word-matching">Match Words</NavLink>
                </li>
              </nav>
            </div>
            <ThemeButton isDark={isDark} setIsDark={setIsDark} />
          </div>
          {/* Page content here */}
          <section className="min-h-screen transition-all sm:px-16">
            <Routes>
              <Route path="/" element={<LandingPage />} />
              <Route path="/pronunciation" element={<PronunciationPage />} />
              <Route path="/definitions" element={<DefinitionsPage />} />
              <Route path="/word-matching" element={<WordMatchingPage />} />
            </Routes>
          </section>
        </div>
        <div className="drawer-side">
          <label
            htmlFor="my-drawer-3"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          {/* Sidebar content here */}
          <nav className="menu p-4 gap-6 justify-center items-center w-3/5 text-xl min-h-screen bg-base-200">
            <span className=" text-7xl text-gray-700 animate-pulse">
              &#8891;
            </span>
            <li>
              <NavLink to="/" onClick={handleNavLinkClick}>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/pronunciation" onClick={handleNavLinkClick}>
                Pronunciation
              </NavLink>
            </li>
            <li>
              <NavLink to="/definitions" onClick={handleNavLinkClick}>
                Definitions
              </NavLink>
            </li>
            <li>
              <NavLink to="/word-matching" onClick={handleNavLinkClick}>
                Match Words
              </NavLink>
            </li>
            <span className=" text-7xl text-gray-700 animate-pulse">
              &#8892;
            </span>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Navbar;
