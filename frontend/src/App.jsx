import React, { useState } from 'react';
import useApplicationData from "./hooks/useApplicationData";
import HomeRoute from "./components/HomeRoute";
import PhotoDetailsModal from "./routes/PhotoDetailsModal";
import topics from "./mocks/topics";
import photos from "./mocks/photos";
import "./App.scss";

const App = () => {
  const { 
    state, 
    updateToFavPhotoIds, 
    setPhotoSelected, 
    onClosePhotoDetailsModal 
  } = useApplicationData();

  return (
    <div className="App">
      <HomeRoute
        photos={state.photos} // photos from mock data
        topics={topics}
        favPhotos={state.favPhotos}
        toggleFavorite={updateToFavPhotoIds}
        openModal={setPhotoSelected}
      />

      {state.displayModal && state.selectedPhoto && (
        <PhotoDetailsModal
          selectedPhoto={state.selectedPhoto}
          favPhotos={state.favPhotos}
          toggleFavorite={updateToFavPhotoIds}
          closeModal={onClosePhotoDetailsModal}
        />
      )}
    </div>
  );
};

export default App;