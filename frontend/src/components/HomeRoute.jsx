import React from "react";
import TopNavigationBar from "./TopNavigationBar";
import PhotoList from "./PhotoList";
import TopicList from "./TopicList";
import "../styles/HomeRoute.scss";

const HomeRoute = ({ topics, photos, favPhotos, toggleFavorite }) => {
  return (
    <div className="home-route">
      <TopNavigationBar topics={topics} isFavPhotoExist={favPhotos.length > 0} />
      <PhotoList 
      photos={photos} 
      favPhotos={favPhotos} 
      toggleFavorite={toggleFavorite} 
      />
    </div>
  );
};

export default HomeRoute;