import React, { use, useState } from "react";
import { Navigate, NavLink, useLocation, useNavigate } from "react-router";
import { AuthContext } from "../provider/AuthProvider";

const Login = () => {
  const [error, setError] = useState("");
  const { userLogin } = use(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();

  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;

    const password = form.password.value;

    console.log(email, password);

    userLogin(email, password)
      .then((result) => {
        const user = result.user;
        alert("Login Successfully");
        navigate(location.state || "/");
      })
      .catch((error) => {
        const errormessage = error.message.split("Firebase: ")[1];
        setError(errormessage);
        // alert(error);
      });
  };

  return (
    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl py-10 mt-26 ">
      <h1 className="text-3xl font-bold text-center">Login now!</h1>
      <form onSubmit={handleLogin} className="card-body">
        <fieldset className="fieldset">
          {/* email input */}
          <label className="label">Email</label>
          <input
            type="email"
            name="email"
            className="input"
            placeholder="Enter your email"
            required
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
          {error && <p className="text-red-600">{error}</p>}

          <button type="submit" className="btn btn-neutral mt-4">
            Login
          </button>
          <div>
            <h4 className="mt-4 text-left ml-2">
              Already have an account?{" "}
              <NavLink
                to="/auth/register"
                className="hover:underline text-blue-600 "
              >
                Register
              </NavLink>
            </h4>
          </div>
        </fieldset>
      </form>
    </div>
  );
};

export default Login;
