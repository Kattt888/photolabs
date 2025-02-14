import React from 'react';
import PhotoFavButton from './PhotoFavButton';
import "../styles/PhotoListItem.scss";

const PhotoListItem = ({ photo }) => {
  if (!photo) return null;
  const { id, location, urls, user } = photo;

  return (
    <div className="photo-list__item">
      <div className="photo-list__image-container">
      <PhotoFavButton />
      <img
        src={urls.regular}
        alt={`Photo by ${user.username}`}
        className="photo-list__image"
      />
      </div>

      <p>Photographer: {user.username}</p>
      <p>Location: {location.city}, {location.country}</p>
      
      <img
        src={user.profile}
        alt={`${user.username}'s Profile Picture`}
        className="photo-list__profile"
      />
    </div>
  );
};

export default PhotoListItem;
