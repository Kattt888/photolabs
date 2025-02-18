import React from "react";
import TopNavigationBar from "./TopNavigationBar";
import PhotoList from "./PhotoList";
import "../styles/HomeRoute.scss";

const HomeRoute = ({ photos, topics,  favPhotos, toggleFavorite, openModal }) => {
  return (
    
    <div className="home-route">
      <TopNavigationBar topics={topics} isFavPhotoExist={favPhotos.length > 0} />
      <PhotoList photos={photos} favPhotos={favPhotos || []} toggleFavorite={toggleFavorite} openModal={openModal} />
    </div>
  );
};

export default HomeRoute;