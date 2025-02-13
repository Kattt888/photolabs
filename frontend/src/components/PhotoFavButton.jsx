// import FavIcon from './FavIcon';
import React, { useState } from 'react';
import '../styles/PhotoFavButton.scss';

const PhotoFavButton = () => {
  const [isLiked, setIsLiked] = useState(false);

  const handleClick = () => {
    setIsLiked(!isLiked);
    console.log("Photo liked status:", !isLiked);
  };

  return (
    <div className="photo-list__fav-icon" onClick={handleClick}>
      <div className="photo-list__fav-icon-svg">
        {isLiked ? '❤️' : '🤍'}
      </div>
    </div>
  );
};

export default PhotoFavButton;
