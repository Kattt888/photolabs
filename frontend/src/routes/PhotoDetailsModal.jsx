import React from 'react';
import '../styles/PhotoDetailsModal.scss'
import closeSymbol from '../assets/closeSymbol.svg';

const PhotoDetailsModal = ({ selectedPhoto, closeModal }) => {
if (!selectedPhoto) return null;

const { urls, user, location } = selectedPhoto;

  return (
    <div className="photo-details-modal">
      <button className="photo-details-modal__close-button" onClick={closeModal}>
        <img src={closeSymbol} alt="close symbol" />
      </button>
<div className="photo-details-modal__content">
  <img
  src={urls?.regular || "/placeholder-image.jpg"}
  alt={`Photo by ${user?.username || "Unknown"}`}
  className="photo-details-modal__image"
  />
  <div className="photo-details-modal__info">
          <p><strong>Photographer:</strong> {user?.username || "Unknown"}</p>
          <p><strong>Location:</strong> {location?.city || "Unknown City"}, {location?.country || "Unknown Country"}</p>
        </div>
      </div>
    </div>
  );
};

export default PhotoDetailsModal;