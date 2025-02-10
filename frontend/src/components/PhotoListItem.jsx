import React from 'react';
import "../styles/PhotoListItem.scss";


const PhotoListItem = ({ id, location, imageSource, username, profile }) => {
  return (
    <div>
      <img src={imageSource} alt={`Photo by ${username}`} />
      <p>Photographer: {username} </p>
      <p>Location: {location.city}, {location.country}</p>
      <img src={profile} alt={`${username}'s profile`} />
    </div>
  ); 
};

export default PhotoListItem;
