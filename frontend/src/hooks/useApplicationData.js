import { useReducer, useEffect } from "react";
import { reducer } from "../reducers/reducer"; 
import { ACTIONS } from "../reducers/actions";

const initialState = {
  photos: [],
  topics: [],
  favPhotos: [],
  selectedPhoto: null,
  displayModal: false
};

const useApplicationData = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  // Fetch photo and topic data
  useEffect(() => {
    fetch("/api/photos")
      .then((res) => res.json())
      .then((data) => dispatch({ type: ACTIONS.SET_PHOTO_DATA, payload: data }));

    fetch("/api/topics")
      .then((res) => res.json())
      .then((data) => dispatch({ type: ACTIONS.SET_TOPIC_DATA, payload: data }));
  }, []);

  // toggle favorite photos function
  const toggleFavorite = (photoId) => {
    if (state.favPhotos.includes(photoId)) {
      dispatch({ type: ACTIONS.FAV_PHOTO_REMOVED, payload: { id: photoId } });
    } else {
      dispatch({ type: ACTIONS.FAV_PHOTO_ADDED, payload: { id: photoId } });
    }
  };

  // open modal and set the selected photo function
  const openModal = (photo) => {
    dispatch({ type: ACTIONS.SELECT_PHOTO, payload: photo });
    dispatch({ type: ACTIONS.DISPLAY_PHOTO_DETAILS, payload: true });
  };

  // close modal function
  const closeModal = () => {
    dispatch({ type: ACTIONS.DISPLAY_PHOTO_DETAILS, payload: false });
  };

  return {
    state,
    toggleFavorite,
    openModal,
    closeModal
  };
};

export default useApplicationData;
