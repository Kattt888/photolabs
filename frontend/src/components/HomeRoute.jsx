import React from "react";
import TopNavigationBar from "./TopNavigationBar";
import PhotoList from "./PhotoList";
import TopicList from "./TopicList";
import "../styles/HomeRoute.scss";

const HomeRoute = ({ topics, photos, favPhotos, toggleFavorite, isFavPhotoExist }) => {
  console.log("📌 topics in HomeRoute:", topics);

  if (!topics || topics.length === 0) {
    console.error("⚠️ No topics is undefined in HomeRoute!");
    return <p>No topics available</p>;
  }

  return (
    <div className="home-route">
      <TopNavigationBar topics={topics} isFavPhotoExist={isFavPhotoExist} />
      <PhotoList photos={photos} favPhotos={favPhotos} toggleFavorite={toggleFavorite} />
    </div>
  );
};

export default HomeRoute;