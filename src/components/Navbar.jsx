import React, { use } from "react";
import { Link, NavLink } from "react-router";
import userIcon from "../assets/user.png";
import { AuthContext } from "../provider/AuthProvider";
const Navbar = () => {
  const { currentUser, UserSignOut } = use(AuthContext);

  const handleLogOut = (e) => {
    e.preventDefault();
    UserSignOut()
      .then(() => {
        alert("Logout Successfully");
      })
      .catch((error) => console.log(error));
  };

  return (
    <div className="flex justify-between items-center">
      <div className=""></div>
      <div className="nav flex gap-5 text-accent">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/career">Career</NavLink>
      </div>
      <div className="login-btn flex gap-5">
        <img src={userIcon} alt="" />

        {currentUser ? (
          <Link onClick={handleLogOut} className="btn btn-primary px-10">
            Logout
          </Link>
        ) : (
          <Link to="/auth/login" className="btn btn-primary px-10 ">
            Login
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
