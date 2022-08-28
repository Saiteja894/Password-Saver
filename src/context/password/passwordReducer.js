import {
  GET_PASSWORDS,
  ADD_PASSWORD,
  UPDATE_PASSWORD,
  DELETE_PASSWORD,
  SET_CURRENT,
  LOADING,
  PASSWORD_ERROR,
  FILTERERING_CONTACTS,
  CLEAR_FILTER,
} from "./types";

export default (state, action) => {
  switch (action.type) {
    case GET_PASSWORDS:
      return { ...state, passwords: action.payload, loading: false };

    case LOADING:
      return { ...state, loading: true };

    case PASSWORD_ERROR:
      return { ...state, error: action.payload };

    case UPDATE_PASSWORD:
      return {
        ...state,
        passwords: state.passwords.map((pass) =>
          pass.id === action.payload.id ? action.payload : pass
        ),
        loading: false,
        current: null,
      };

    case SET_CURRENT:
      return { ...state, current: action.payload };

    case DELETE_PASSWORD:
      return {
        ...state,
        passwords: state.passwords.filter((pass) => pass.id != action.payload),
        loading: false,
      };

    case ADD_PASSWORD:
      return {
        ...state,
        passwords: [...state.passwords, action.payload],
        loading: false,
        alert: "Password Added Succesfully!",
      };

    case FILTERERING_CONTACTS:
      return {
        ...state,
        filtered: state.passwords.filter(
          (pass) =>
            pass.name
              .toLowerCase()
              .includes(action.payload.toString().toLowerCase()) ||
            pass.url.toLowerCase().includes(action.payload.toLowerCase())
        ),
      };

    case CLEAR_FILTER:
      return { ...state, filtered: null };

    default:
      return state;
  }
};
