import React, { useReducer } from "react";
import PasswordContext from "./passwordContext";
import axios from "axios";

import PasswordReducer from "./passwordReducer";
import {
  ADD_PASSWORD,
  CLEAR_FILTER,
  DELETE_PASSWORD,
  FILTERERING_CONTACTS,
  GET_PASSWORDS,
  LOADING,
  PASSWORD_ERROR,
  SET_CURRENT,
  UPDATE_PASSWORD,
} from "./types";

const PasswordState = (props) => {
  const initialState = {
    passwords: [],
    current: null,
    filtered: null,
    error: null,
    alert: null,
  };

  const [state, dispatch] = useReducer(PasswordReducer, initialState);

  const getPasswords = async () => {
    dispatch({ type: LOADING });
    try {
      let res = await axios.get(
        "https://630781963a2114bac7645d41.mockapi.io/api/v2/passwords"
      );
      dispatch({ type: GET_PASSWORDS, payload: res.data });
    } catch (err) {
      dispatch({ type: PASSWORD_ERROR, payload: err.data });
    }
  };

  const addPassword = async (pass) => {
    dispatch({ type: LOADING });
    try {
      let res = await axios.post(
        "https://630781963a2114bac7645d41.mockapi.io/api/v2/passwords",
        pass,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      dispatch({ type: ADD_PASSWORD, payload: res.data });
    } catch (err) {
      dispatch({ type: PASSWORD_ERROR, payload: err.data });
    }
  };

  const deletePassword = async (pass) => {
    dispatch({ type: LOADING });
    try {
      await axios.delete(
        `https://630781963a2114bac7645d41.mockapi.io/api/v2/passwords/${pass.id}`
      );

      dispatch({ type: DELETE_PASSWORD, payload: pass.id });
    } catch (err) {
      dispatch({ type: PASSWORD_ERROR, payload: err.data });
    }
  };
  const updatePassword = async (pass) => {
    dispatch({ type: LOADING });
    try {
      await axios.put(
        `https://630781963a2114bac7645d41.mockapi.io/api/v2/passwords/${pass.id}`,
        pass,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      dispatch({ type: UPDATE_PASSWORD, payload: pass });
    } catch (err) {
      dispatch({ type: PASSWORD_ERROR, payload: err.data });
    }
  };

  const setCurrent = (cur) => {
    dispatch({ type: SET_CURRENT, payload: cur });
  };

  const filterPassword = (searchItem) => {
    if (searchItem === "") {
      dispatch({ type: CLEAR_FILTER });
    } else {
      dispatch({ type: FILTERERING_CONTACTS, payload: searchItem });
    }
  };

  return (
    <PasswordContext.Provider
      value={{
        passwords: state.passwords,
        error: state.error,
        current: state.current,
        loading: state.loading,
        filtered: state.filtered,
        alert: state.alert,
        getPasswords,
        addPassword,
        deletePassword,
        setCurrent,
        updatePassword,
        filterPassword,
      }}
    >
      {props.children}
    </PasswordContext.Provider>
  );
};

export default PasswordState;
