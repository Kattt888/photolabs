import React, { useState, useEffect } from "react";
import FavBadge from "./FavBadge";
import "../styles/TopNavigationBar.scss";

const TopNavigationBar = ({ topics, isFavPhotoExist, fetchPhotosByTopic }) => {
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem("them") === "dark";
});

// Dark Mode Toggle + store preference in localStorage for user
const toggleDarkMode = () => {
  const newMode = !darkMode; 
  setDarkMode(newMode);
    localStorage.setItem("theme", newMode ? "dark" : "light");
    document.body.classList.toggle("dark-mode", newMode);
  };

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark-mode");
    } else {
      document.body.classList.remove("dark-mode");
    }
  }, [darkMode]);

  return (
    <nav className="top-nav-bar">
      <div className="top-nav-bar__left">
      <span className="top-nav-bar__logo">PhotoLabs</span>
      </div>
      <ul className="top-nav-bar__topic-list">
        {topics.map((topic) => (
          <li 
            key={topic.id} 
            className="topic-list__item"
            onClick={() => { 
              fetchPhotosByTopic(topic.id);
            }}
            style={{ cursor: "pointer" }} 
          >
            {topic.title}
          </li>
        ))}
      </ul>
      <div className="nav-badge">
        <FavBadge isFavPhotoExist={isFavPhotoExist} />
        
        {/* Dark Mode Toggle Button */}
        <button onClick={toggleDarkMode} className="dark-mode-toggle">
          {darkMode ? "🌙" : "☀️"}
        </button>
      </div>
    </nav>
  );
};

export default TopNavigationBar;
