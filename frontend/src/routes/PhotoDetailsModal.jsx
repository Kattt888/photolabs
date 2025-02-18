import React, { useEffect } from 'react';
import '../styles/PhotoDetailsModal.scss';
import closeSymbol from '../assets/closeSymbol.svg';
import PhotoFavButton from '../components/PhotoFavButton';
import PhotoListItem from '../components/PhotoListItem';

const PhotoDetailsModal = ({ selectedPhoto, similarPhotos, favPhotos, toggleFavorite, closeModal }) => {
  if (!selectedPhoto) return null;

  console.log("📸 Displaying Photo in Modal:", selectedPhoto);
  console.log("📷 Similar Photos:", similarPhotos);
  console.log("💖 Favourite Photos:", favPhotos);

  const { id, urls, user, location } = selectedPhoto;
  const isFav = favPhotos.includes(id);

  const handleOverlayClick = (event) => {
    if (event.target === event.currentTarget) {
      closeModal();
    }
  };

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        closeModal();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [closeModal]);

  return (
    <div className="photo-details-modal" onClick={handleOverlayClick}>
     <button className="photo-details-modal__close-button" onClick={closeModal}>
        <img src={closeSymbol} alt="Close Modal" />
      </button>

      {/* Fav Button inside Modal */}
      <div className="photo-details-modal__content" onClick={(e) => e.stopPropagation()}>
      <PhotoFavButton isFav={isFav} toggleFavorite={() => toggleFavorite(id)} />
        
        {/* Selected Photo */}
        <img
          src={urls?.regular || "/placeholder-image.jpg"}
          alt={`Photo by ${user?.username || "Unknown"}`}
          className="photo-details-modal__image"
        />

         {/* Photographer Info */}
        <div className="photo-details-modal__info">
          <p><strong>Photographer:</strong> {user?.username || "Unknown"}</p>
          <p><strong>Location:</strong> {location?.city || "Unknown City"}, {location?.country || "Unknown Country"}</p>
        </div>

        {/* Similar Photos */}
        {similarPhotos && similarPhotos.length > 0 && (
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
        )}
      </div>
    </div>
  );
};

export default PhotoDetailsModal;