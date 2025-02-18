import React from "react";
import FavBadge from "./FavBadge";
import "../styles/TopNavigationBar.scss";

const TopNavigationBar = ({ topics, isFavPhotoExist }) => {
  return (
    <nav className="top-nav-bar">
      <span className="top-nav-bar__logo">PhotoLabs</span>
      <ul className="top-nav-bar__topic-list">
      {topics.map((topic) => (
          <li key={topic.id} className="topic-list__item">
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