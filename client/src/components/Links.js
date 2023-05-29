import React from "react";

export const Links = () => {
  var first_name = "";
  const url = window.location.href;
  if (url.includes("first_name")) {
    first_name = url.substring(
      url.indexOf("=") + 1,
      url.indexOf("&")
    );
    first_name.toUpperCase();
  }
  return (
    <div>
      <a className="signup" href="/register">
        {first_name ? first_name : "Sign Up"}
      </a>
      {first_name ? null : <a className="login" href="/login">Login</a>}
    </div>
  );
};
