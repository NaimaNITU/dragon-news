import React, { use, useState } from "react";
import { NavLink, useLocation, useNavigate } from "react-router";
import { AuthContext } from "../provider/AuthProvider";

const Register = () => {
  const { userRegistration, setUser, updateUserProfile } = use(AuthContext);
  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [photoError, setPhotoError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const location = useLocation();
  const navigate = useNavigate();

  const handleRegister = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    // verified name
    if (name === "") {
      setNameError("Name is required");
      return;
    } else if (name.length < 5) {
      setNameError("Name must be at least 5 characters");
      return;
    } else {
      setNameError("");
    }

    const email = form.email.value;
    // verified email
    if (email === "") {
      setEmailError("Email is required");
      return;
    } else if (!/^[^\s@]+@[^\s@]+\.(com)$/.test(email)) {
      setEmailError("Please enter a valid email with '@' and ending in '.com'");
      return;
    } else {
      setEmailError("");
    }

    const photo = form.photo.value;
    // verified photo
    if (photo === "") {
      setPhotoError("Photo is required");
      return;
    } else {
      setPhotoError("");
    }

    const password = form.password.value;
    // verified password
    if (password === "") {
      setPasswordError("Password is required");
      return;
    } else if (password.length < 4) {
      setPasswordError("Password must be at least 4 characters");
      return;
    } else if (!/[A-Z]/.test(password)) {
      setPasswordError("Password must contain at least one uppercase letter");
      return;
    } else if (!/[a-z]/.test(password)) {
      setPasswordError("Password must contain at least one lowercase letter");
      return;
    } else {
      setPasswordError("");
    }
    // console.log(name, email, photo, password);

    userRegistration(email, password)
      .then((result) => {
        const user = result.user;

        updateUserProfile({ displayName: name, photoURL: photo })
          .then(() => {
            setUser({ ...user, displayName: name, photoURL: photo });
            alert("Registration Successfully");
            navigate(location.state || "/");
          })
          .catch((error) => {
            console.log(error);
            setUser(user);
          });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl py-10 mt-10 ">
      <h1 className="text-3xl font-bold text-center">Register now!</h1>
      <form onSubmit={handleRegister} className="card-body">
        <fieldset className="fieldset">
          {/* name */}
          <label className="label">Name</label>
          <input type="text" name="name" className="input" placeholder="Name" />
          {nameError && <p className="text-red-600">{nameError}</p>}

          {/* email */}
          <label className="label">Email</label>
          <input
            type="email"
            name="email"
            className="input"
            placeholder="Email"
            required
          />
          {emailError && <p className="text-red-600">{emailError}</p>}

          {/* photo url */}
          <label className="label">Photo URL</label>
          <input
            type="text"
            name="photo"
            className="input"
            placeholder="Photo URL"
          />
          {photoError && <p className="text-red-600">{photoError}</p>}

          {/* password */}
          <label className="label">Password</label>
          <input
            type="password"
            name="password"
            className="input"
            placeholder="Password"
            required
          />
          {passwordError && <p className="text-red-600">{passwordError}</p>}

          <button type="submit" className="btn btn-neutral mt-4">
            Register
          </button>
          <div>
            <h4 className="mt-4 text-left ml-2">
              Already have an account?{" "}
              <NavLink
                to="/auth/login"
                className="hover:underline text-blue-600 "
              >
                Login
              </NavLink>
            </h4>
          </div>
        </fieldset>
      </form>
    </div>
  );
};

export default Register;
