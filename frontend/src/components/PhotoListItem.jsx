import React from 'react';
import "../styles/PhotoListItem.scss";

const PhotoListItem = ({ photo }) => {
  const { id, username, location, imageSource, profile } = photo;

  return (
    <div className="photo-list__item">
      <img
        src={imageSource}
        alt={`Photo by ${username}`}
        className="photo-list__image"
      />
      <p>Photographer: {username}</p>
      <p>Location: {location.city}, {location.country}</p>
      <img
        src={profile}
        alt={`${username}'s Profile Picture`}
        className="photo-list__profile"
      />
    </div>
  );
};

export default PhotoListItem;
