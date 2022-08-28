import React, { useContext } from "react";
import PasswordContext from "../context/password/passwordContext";

const PasswordFilter = () => {
  const passwordContext = useContext(PasswordContext);
  const { filterPassword } = passwordContext;
  const changeHandler = (e) => {
    filterPassword(e.target.value);
  };
  return (
    <div className="filter-search mt-2">
      <div>
        <input
          type="search"
          placeholder="Search..."
          className="form-control filter-input"
          onChange={changeHandler}
        />
      </div>
      <div className="filter-icon">
        <i class="fas fa-search"></i>
      </div>
    </div>
  );
};

export default PasswordFilter;
