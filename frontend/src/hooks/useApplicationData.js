import { useState } from "react";

const useApplicationData = () => {
  // Defining State
  const [state, setState] = useState({
    favPhotos: [],
    selectedPhoto: null,
    displayModal: false,
  });

  // Update Favorite Photos
  const updateToFavPhotoIds = (photoId) => {
    setState((prev) => ({
      ...prev,
      favPhotos: prev.favPhotos.includes(photoId)
        ? prev.favPhotos.filter((id) => id !== photoId)
        : [...prev.favPhotos, photoId],
    }));
  };

  // Set Selected Photo (Open Modal)
  const setPhotoSelected = (photo) => {
    setState((prev) => ({
      ...prev,
      selectedPhoto: photo,
      displayModal: true,
    }));
  };

  // Close Modal
  const onClosePhotoDetailsModal = () => {
    setState((prev) => ({
      ...prev,
      selectedPhoto: null,
      displayModal: false,
    }));
  };

  // Return State & Actions
  return {
    state,
    updateToFavPhotoIds,
    setPhotoSelected,
    onClosePhotoDetailsModal,
  };
};

export default useApplicationData;
