import React, { useContext, useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import PasswordContext from "../context/password/passwordContext";

const PasswordForm = () => {
  const navigate = useNavigate();
  const [alert, setAlert] = useState({ errormsg: null });
  const nameRef = useRef(null);
  const urlRef = useRef(null);
  const usernameRef = useRef(null);
  const passRef = useRef(null);
  const submitRef = useRef(null);

  const passwordContext = useContext(PasswordContext);
  const { addPassword, current, updatePassword, setCurrent } = passwordContext;
  const [pass, setPass] = useState({
    name: "",
    url: "",
    username: "",
    password: "",
  });
  const { name, url, username, password } = pass;

  useEffect(() => {
    if (current) {
      setPass(current);
    } else {
      setPass({
        name: "",
        url: "",
        username: "",
        password: "",
      });
    }
  }, [current]);

  const changeHandler = (e) => {
    setPass({ ...pass, [e.target.name]: e.target.value });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    if (
      pass.name === "" ||
      pass.url === "" ||
      pass.username === "" ||
      pass.password === ""
    ) {
      setAlert({ errormsg: "Please fill all the fields", color: "red" });
      setTimeout(() => {
        setAlert(null);
      }, 5000);
      return;
    }
    if (current) {
      updatePassword(pass);
    } else {
      addPassword(pass);
    }
    navigate("/passwords");
    setPass({
      name: "",
      url: "",
      username: "",
      password: "",
    });
  };
  return (
    <div className="container form-container">
      <h1 className="text-primary mb-4">
        {current ? "Update Password" : "Add Password"}
      </h1>
      {alert && alert.errormsg && (
        <div class="alert alert-danger" role="alert">
          {alert.errormsg}
        </div>
      )}
      <form onSubmit={submitHandler}>
        <div className="mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Website Name"
            name="name"
            value={name}
            onChange={changeHandler}
            ref={nameRef}
            onKeyUp={(e) => (e.key === "Enter" ? urlRef.current.focus() : "")}
          />
        </div>
        <div className="mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Website Url"
            name="url"
            value={url}
            onChange={changeHandler}
            ref={urlRef}
            onKeyUp={(e) =>
              e.key === "Enter" ? usernameRef.current.focus() : ""
            }
          />
        </div>
        <div className="mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Website Username or Email"
            name="username"
            value={username}
            onChange={changeHandler}
            ref={usernameRef}
            onKeyUp={(e) => (e.key === "Enter" ? passRef.current.focus() : "")}
          />
        </div>
        <div className="mb-3">
          <input
            type="password"
            className="form-control"
            placeholder="Password"
            name="password"
            value={password}
            onChange={changeHandler}
            ref={passRef}
            onKeyUp={(e) =>
              e.key === "Enter" ? submitRef.current.focus() : ""
            }
          />
        </div>

        <button
          type="submit"
          className="btn btn-primary w-100 mt-2"
          ref={submitRef}
        >
          {current ? "Update Password" : "Add Password"}
        </button>
        {current && (
          <button
            type="button"
            className="btn btn-light w-100 mt-3"
            onClick={() => setCurrent(null)}
          >
            clear
          </button>
        )}
      </form>
    </div>
  );
};

export default PasswordForm;
