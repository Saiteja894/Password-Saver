import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";

import PasswordContext from "../context/password/passwordContext";

const Password = ({ password }) => {
  const navigate = useNavigate();
  const passwordContext = useContext(PasswordContext);

  const { deletePassword, setCurrent } = passwordContext;

  const update = (pass) => {
    setCurrent(pass);
    navigate("/add");
  };

  const getUrl = (url) => {
    if (
      url.toLowerCase().startsWith("http://") ||
      url.toLowerCase().startsWith("https://")
    ) {
      return url;
    }
    return "https://" + url;
  };
  return (
    <div className="d-flex crd justify-content-between pt-3 pb-3 px-4 mb-3 shadow bg-light">
      <div>
        <h3>{password.name}</h3>

        <p className="m-2">
          <i className="fas fa-link me-2"></i>
          <a href={getUrl(password.url)} target="_blank">
            {password.url}
          </a>
        </p>

        <p className="m-2">
          <i className="fas fa-user me-2"></i>
          {password.username}
        </p>

        <p className="m-2">
          <i className="fas fa-key me-2"></i>
          {password.password}
        </p>
      </div>

      <div className="d-flex flex-column">
        <button
          className="btn btn-primary me-2 mb-3"
          onClick={() => update(password)}
        >
          Edit
        </button>
        <button
          className="btn btn-danger"
          onClick={() => deletePassword(password)}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default Password;
