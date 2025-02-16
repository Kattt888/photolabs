import React from 'react';
import PhotoFavButton from './PhotoFavButton';
import "../styles/PhotoListItem.scss";

const PhotoListItem = ({ photo }) => {
  if (!photo) return null;

  const { user, location, urls } = photo;

  return (
    <div className="photo-list__item">
      <div className="photo-list__image-container">
      <PhotoFavButton />
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
        alt={`${user?.username} || "Unknown"}'s Profile Picture`}
        className="photo-list__profile"
      />
    </div>
  );
};

export default PhotoListItem;
