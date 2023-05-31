import React, {useContext} from "react";
import { GlobalContext } from "../context/GlobalState";

import "../App.css";
import { Link } from "react-router-dom";

export const Links = () => {
  // check if user is logged in
  const { isLogged, logout } = useContext(GlobalContext);

  console.log(isLogged);

  // handle logout
  const handleLogout = (ev) => {
    ev.preventDefault();
    logout();
    window.location.href = "/";
  };
  return (
    <div>
      {/* conditionally render name if user is logged in other wise render the buttons */}
      {isLogged ? (
        <div className="">
          <h1>Welcome!</h1>
          <Link to="/">
            <button className="login" onClick={handleLogout}>Logout</button>
          </Link>
        </div>
      ) : (
        <div>
          <Link to="/login">
            <button className="login">Login</button>
          </Link>
          <Link to="/register">
            <button className="signup">Sign Up</button>
          </Link>
        </div>
      )}

    </div>
  );
};
