import React, { useState } from 'react';
import HomeRoute from "./components/HomeRoute";
import PhotoDetailsModal from "./routes/PhotoDetailsModal";
import topics from "./mocks/topics";
import photos from "./mocks/photos";
import "./App.scss";

const App = () => {
  const [favPhotos, setFavPhotos] = useState([]);
  const [selectedPhoto, setSelectedPhoto] = useState(null);
  const [displayModal, setDisplayModal] = useState(false);
  const [similarPhotos, setSimilarPhotos] = useState([]);

  const toggleFavorite = (photoId) => {
    setFavPhotos((prevFavs) =>
      prevFavs.includes(photoId)
        ? prevFavs.filter((id) => id !== photoId)
        : [...prevFavs, photoId]
    );
  };

  const openModal = (photo) => {
    setSelectedPhoto(photo);
    setDisplayModal(true);

    const similar = photos.filter((p) => p.topic === photo.topic && p.id !== photo.id);
    setSimilarPhotos(similar);

    console.log("🖼️ Photo Details Passed to Modal:", photo);
    console.log("📸 Similar Photos:", similar);
  };

  const closeModal = () => {
    setSelectedPhoto(null);
    setDisplayModal(false);
    setSimilarPhotos([]);
  };

  const isFavPhotoExist = favPhotos.length > 0;

  return (
    <div className="App">
      <HomeRoute
        photos={photos}
        topics={topics}
        favPhotos={favPhotos}
        toggleFavorite={toggleFavorite}
        isFavPhotoExist={isFavPhotoExist}
        openModal={openModal}
      />

      {displayModal && selectedPhoto && (
        <PhotoDetailsModal
          selectedPhoto={selectedPhoto}
          similarPhotos={photos.filter(p => p.topic === selectedPhoto.topic && p.id !== selectedPhoto.id)}
          favPhotos={favPhotos}
          toggleFavorite={toggleFavorite}
          closeModal={closeModal}
        />
      )}
    </div>
  );
};

export default App;
