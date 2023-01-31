import "./Auth.css";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { login, logout } from "../../Store/authSlice";

const Auth = () => {
  const dispatch = useDispatch();
  const { auth } = useSelector((state) => state);
  let btnText = auth.isLoggedIn ? "Logout" : "Login";

  const loginHandler = () => {
    if (auth.isLoggedIn) {
      dispatch(logout());
      btnText = "Login";
    } else {
      dispatch(login());
      btnText = "Logout";
    }
  };

  return (
    <div className="Auth">
      <button onClick={loginHandler}>{btnText}</button>
    </div>
  );
};

export default Auth;
