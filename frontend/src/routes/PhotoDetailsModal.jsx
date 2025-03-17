import React, { useEffect } from "react";
import "../styles/PhotoDetailsModal.scss";
import closeSymbol from "../assets/closeSymbol.svg";
import PhotoFavButton from "../components/PhotoFavButton";
import PhotoListItem from "../components/PhotoListItem";

const PhotoDetailsModal = ({ selectedPhoto, favPhotos, toggleFavorite, closeModal }) => {
  if (!selectedPhoto || Object.keys(selectedPhoto).length === 0) {
    console.warn("🚨 No valid selectedPhoto data. Modal will not render.");
    return null;
  }

  const { id, urls, user, location, similar_photos } = selectedPhoto;
  const isFav = favPhotos.includes(id);

  // `similar_photos` array
  const similarPhotos = Array.isArray(similar_photos) ? similar_photos.slice(0, 4) : [];

  return (
    <>
      {/* Background Overlay */}
      <div className="photo-details-overlay" onClick={closeModal}></div>
  
      {/* Modal Content */}
      <div className="photo-details-modal">
        <button className="photo-details-modal__close-button" onClick={closeModal}>
          <img src={closeSymbol} alt="Close Modal" />
        </button>
  
        <div className="photo-details-modal__content">
          <PhotoFavButton isFav={isFav} toggleFavorite={() => toggleFavorite(id)} />
  
          <img
            src={urls?.regular || "/placeholder-image.jpg"}
            alt={`Photo by ${user?.username || "Unknown"}`}
            className="photo-details-modal__image"
          />
  
          <div className="photo-details-modal__info">
            <p><strong>Photographer:</strong> {user?.username || "Unknown"}</p>
            <p><strong>Location:</strong> {location?.city || "Unknown City"}, {location?.country || "Unknown Country"}</p>
          </div>
  
          {/* Show Similar Photos */}
          {similarPhotos.length > 0 ? (
            <div className="photo-details-modal__similar-photos">
              <h3>Similar Photos</h3>
              <div className="photo-details-modal__similar-list">
                {similarPhotos.map((photo) => (
                  <PhotoListItem
                    key={photo.id}
                    photo={photo}
                    favPhotos={favPhotos}
                    toggleFavorite={toggleFavorite}
                  />
                ))}
              </div>
            </div>
          ) : (
            <p>No similar photos found.</p>
          )}
        </div>
      </div>
    </>
  );
};

export default PhotoDetailsModal;