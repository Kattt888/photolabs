import React from "react";
import TopNavigationBar from "./TopNavigationBar";
import PhotoList from "./PhotoList";
import "../styles/HomeRoute.scss";

const HomeRoute = ({ isFavPhotoExist }) => {
  return (
    <div className="home-route">
      <TopNavigationBar isFavPhotoExist={isFavPhotoExist} />
      <PhotoList />
    </div>
  );
};

export default HomeRoute;