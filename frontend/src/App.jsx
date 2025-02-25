import React from "react";
import PhotoDetailsModal from "./routes/PhotoDetailsModal";
import HomeRoute from "./components/HomeRoute";
import useApplicationData from "./hooks/useApplicationData";
import PhotoListItem from "./components/PhotoListItem";
import "./App.scss";

const App = () => {
  const { state, toggleFavorite, openModal, closeModal, fetchPhotosByTopic } = useApplicationData();

  return (
    <div className="App">
      <HomeRoute
        photos={state.photos}
        topics={state.topics}
        favPhotos={state.favPhotos}
        toggleFavorite={toggleFavorite}
        openModal={openModal}
        fetchPhotosByTopic={fetchPhotosByTopic}
      />

      {state.displayModal && state.selectedPhoto && (
        <PhotoDetailsModal
          selectedPhoto={state.selectedPhoto}
          favPhotos={state.favPhotos}
          toggleFavorite={toggleFavorite}
          closeModal={closeModal}
        />
      )}
    </div>
  );
};

export default App;
