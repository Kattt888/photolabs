import React from "react";
import FavBadge from "./FavBadge";
import "../styles/TopNavigationBar.scss";

const TopNavigationBar = ({ topics, isFavPhotoExist, fetchPhotosByTopic }) => {
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
              console.log("Clicked Topic ID:", topic.id);  // Debugging Log
              fetchPhotosByTopic(topic.id);
            }}
            style={{ cursor: "pointer" }} 
          >
            {topic.title}
          </li>
        ))}
      </ul>
      <div className="fav-badge">
        <FavBadge isFavPhotoExist={isFavPhotoExist} />
      </div>
    </nav>
  );
};

export default TopNavigationBar;
