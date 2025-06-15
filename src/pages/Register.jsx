import React, { use } from "react";
import { NavLink, useLocation, useNavigate } from "react-router";
import { AuthContext } from "../provider/AuthProvider";

const Register = () => {
  const { userRegistration, setUser } = use(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();

  const handleRegister = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    // console.log(name, email, photo, password);

    userRegistration(email, password)
      .then((result) => {
        const user = result.user;
        setUser(user);

        alert("Registration Successfully");
        navigate(location.state || "/");
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

          {/* email */}
          <label className="label">Email</label>
          <input
            type="email"
            name="email"
            className="input"
            placeholder="Email"
            required
          />

          {/* photo url */}
          <label className="label">Photo URL</label>
          <input
            type="email"
            name="photo"
            className="input"
            placeholder="Photo URL"
          />

          {/* password */}
          <label className="label">Password</label>
          <input
            type="password"
            name="password"
            className="input"
            placeholder="Password"
            required
          />
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
