import React, { useState } from 'react';
import '../styles/PhotoFavButton.scss';

const PhotoFavButton = ({ isFav, toggleFavorite }) => {
  return (
    <button
      className={`photo-list__fav-button ${isFav ? "fav-active" : ""}`}
      onClick={toggleFavorite}
      >
      {isFav ? '❤️' : '🤍'}
    </button>
  );
};

export default PhotoFavButton;
