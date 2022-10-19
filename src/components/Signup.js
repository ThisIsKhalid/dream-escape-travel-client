import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/UserContext";
import { FaGoogle } from "react-icons/fa";

const Signup = () => {
  const [error, setError] = useState(null);
  const { createUser, googleSignIn } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || "/";

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    if (password < 6) {
      setError("Password must be 6 charracter long.");
      return;
    }

    createUser(email, password)
      .then((userCredential) => {
        form.reset();
      })
      .catch((error) => {});
  };

  const handleGoogleSignIn = () => {
    googleSignIn()
      .then((res) => {
        navigate(from, { replace: true });
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold mb-5">Please Sign Up!</h1>
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={handleSubmit} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                required
                placeholder="email"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                name="password"
                required
                placeholder="password"
                className="input input-bordered"
              />
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Sign Up</button>
            </div>
          </form>
          <div className="form-control mx-8 mb-3">
            <Link
              onClick={handleGoogleSignIn}
              className="btn btn-outline btn-success"
            >
              <span className="text-2xl mr-3">
                <FaGoogle></FaGoogle>
              </span>{" "}
              Google
            </Link>
          </div>
          <p className="mx-auto mb-5">
            Already have an account? <Link to="/login">Log In</Link>
          </p>
          <p className="text-red-500 text-center">{error}</p>
        </div>
      </div>
    </div>
  );
};

export default Signup;
