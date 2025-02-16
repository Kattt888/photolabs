import React from 'react';
import PhotoListItem from './PhotoListItem';
import "../styles/PhotoList.scss";

const PhotoList = ({ photos }) => {
  if (!photos || photos.length === 0) {
    return <p>No photos available</p>; // Debugging check
  }

  return (
  <ul className="photo-list">
    {photos.map((photo) => (
      <PhotoListItem key={photo.id} photo={photo} />
    ))}
  </ul>
  );
};

export default PhotoList;
