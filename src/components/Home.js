import React from "react";
import { Fragment } from "react/cjs/react.production.min";
import PasswordFilter from "./PasswordFilter";
import PasswordForm from "./PasswordForm";
import Passwords from "./Passwords";

const Home = () => {
  return (
    <div className="home-container">
      <h1 className="text-center">Password Saver</h1>
      <img
        src="https://signal.avg.com/hs-fs/hubfs/Blog_Content/Avg/Signal/AVG%20Signal%20Images/How%20to%20choose%20the%20best%20password%20manager%20(Signal)/Password-manager.png?width=1320&name=Password-manager.png"
        className="w-100"
      />
    </div>
  );
};

export default Home;
