import React from "react";
import LoginComponent from "../components/login/LoginComponent";

function LoginContainer() {
  const fnLogin = (event) => {
    event.preventDefault();
    console.log("click")
    localStorage.setItem("userData", "Hay usuario");
  };
  return <LoginComponent handleSubmit={fnLogin} />;
}

export default LoginContainer;
