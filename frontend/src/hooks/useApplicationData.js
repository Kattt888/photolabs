import { useReducer, useEffect } from "react";
import { reducer } from "../reducers/reducers"; 
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

  // Fetching photo + topics  data from API via promise.all + error handling
  useEffect(() => {
    Promise.all([
      fetch("/api/photos").then(res => res.json()),
      fetch("/api/topics").then(res => res.json())
    ])
    .then(([photosData, topicsData]) => {
      dispatch({ type: ACTIONS.SET_PHOTO_DATA, payload: photosData });
      dispatch({ type: ACTIONS.SET_TOPIC_DATA, payload: topicsData });
    })
    .catch(error => console.error("Error fetching data:", error));
  }, []);

 
  useEffect(() => {
    fetch("/api/topics")
      .then((response) => response.json())
      .then((data) => dispatch({ type: ACTIONS.SET_TOPIC_DATA, payload: data }))
  }, []);

  // Function to fetch photos by topic
  const fetchPhotosByTopic = (topicId) => {
    fetch(`/api/topics/${topicId}/photos`)
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch topic photos");
      return res.json();
    })
      .then((data) => dispatch({ type: ACTIONS.SET_PHOTO_DATA, payload: data }))
      .catch(error => console.error("Error fetching topic photos:", error));
  };

  const openModal = (photo) => {
    dispatch({ type: ACTIONS.SELECT_PHOTO, payload: photo });
    dispatch({ type: ACTIONS.TOGGLE_MODAL, payload: true });
  };

  const closeModal = () => {
    dispatch({ type: ACTIONS.TOGGLE_MODAL, payload: false });
  };

  return {
    state,
    fetchPhotosByTopic,
    toggleFavorite: (photoId) => {
      dispatch({
        type: state.favPhotos.includes(photoId)
          ? ACTIONS.FAV_PHOTO_REMOVED
          : ACTIONS.FAV_PHOTO_ADDED,
        payload: { id: photoId }
      });
    },
    openModal,
    closeModal 
  };
};

export default useApplicationData;
