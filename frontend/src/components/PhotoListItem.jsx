import React from 'react';
import PhotoFavButton from './PhotoFavButton';
import "../styles/PhotoListItem.scss";

const PhotoListItem = ({ photo, favPhotos, toggleFavorite }) => {
  if (!photo) return null;

  const user = photo?.user || {};
  const location = photo?.location || {};
  const urls = photo?.urls || {};

  return (
    <div className="photo-list__item">
      <div className="photo-list__image-container">
        <PhotoFavButton 
          isFav={favPhotos.includes(photo.id)}
          toggleFavorite={() => toggleFavorite(photo.id)}
        />
        <img
          src={urls.regular || "/placeholder-image.jpg"}
          alt={`Photo by ${user?.username || "Unknown"}`}
          className="photo-list__image"
        />
      </div>

      <p>Photographer: {user?.username || "Unknown"}</p>
      <p>Location: {location?.city || "Unknown City"}, {location?.country || "Unknown Country"}</p>
      
      <img
        src={user?.profile || "/default-profile.jpg"}
        alt={`${user?.username || "Unknown"}'s Profile Picture`}
        className="photo-list__profile"
      />
    </div>
  );
};

export default PhotoListItem;

