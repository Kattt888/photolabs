import React from 'react';
import PhotoListItem from './PhotoListItem';
import "../styles/PhotoList.scss";

const PhotoList = ({ photos, favPhotos, toggleFavorite, openModal }) => {
  if (!photos || photos.length === 0) {
    return <p>No photos available</p>;
  }

  return (
    <div className="photo-list">
    {photos.map((photo) => (
      <PhotoListItem
        key={photo.id}
        photo={photo}
        favPhotos={favPhotos || []}
        toggleFavorite={toggleFavorite}
        openModal={openModal}
      />
    ))}
  </div>
  );
};

export default PhotoList;