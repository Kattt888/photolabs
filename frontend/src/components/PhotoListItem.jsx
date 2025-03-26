import React from 'react';
import PhotoFavButton from './PhotoFavButton';
import "../styles/PhotoListItem.scss";

const PhotoListItem = ({ photo, favPhotos, toggleFavorite, openModal }) => {
  if (!photo) return null;

  const user = photo?.user || {};
  const location = photo?.location || {};
  const urls = photo?.urls || {};
  const isFav = favPhotos.includes(photo.id);

  return (
    <div className="photo-list__item">
      {/* Image container with heart button in the top-left */}
      {/* <div className="photo-list__image-container"> */}
        <img
          src={urls.regular || "/placeholder-image.jpg"}
          alt={`Photo by ${user?.username || "Unknown"}`}
          className="photo-list__image"
          onClick={() => {
            if (openModal) {
            openModal(photo)}
          }
          }
        />
        <PhotoFavButton isFav={isFav} toggleFavorite={() => toggleFavorite(photo.id)} />
      {/* </div> */}

      {/* Photographer's Profile & Details */}
      <div className="photo-list__user-details">
        <img
          src={user?.profile || "/default-profile.jpg"}
          alt={`${user?.username || "Unknown"}'s Profile Picture`}
          className="photo-list__user-profile"
        />
        <div className="photo-list__user-info">
          <p className="photo-list__user-name">{user?.username || "Unknown"}</p>
          <p className="photo-list__user-location">
            {location?.city || "Unknown City"}, {location?.country || "Unknown Country"}
          </p>
        </div>
      </div>
    </div>
  );
};

export default PhotoListItem;


