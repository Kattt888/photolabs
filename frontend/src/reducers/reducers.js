import { ACTIONS } from "./actions";

export function reducer(state, action) {
  switch (action.type) {
    case ACTIONS.SET_PHOTO_DATA:
      return { ...state, photos: action.payload };

    case ACTIONS.SET_TOPIC_DATA:
      return { ...state, topics: action.payload };

    case ACTIONS.FAV_PHOTO_ADDED:
      return { ...state, favPhotos: [...state.favPhotos, action.payload.id] };

    case ACTIONS.FAV_PHOTO_REMOVED:
      return {
        ...state,
        favPhotos: state.favPhotos.filter((id) => id !== action.payload.id)
      };

    case ACTIONS.SELECT_PHOTO:
      return { ...state, selectedPhoto: action.payload };

    case ACTIONS.TOGGLE_MODAL:
      return { ...state, displayModal: action.payload };

    default:
      throw new Error(
        `Tried to reduce with unsupported action type: ${action.type}`
      );
  }
}
