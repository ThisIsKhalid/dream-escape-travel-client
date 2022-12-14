import React, { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/UserContext";
import { FaGoogle } from "react-icons/fa";

const Login = () => {
  const { login, googleSignIn } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || "/";

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    login(email, password)
      .then((result) => {
        // console.log(result.user);
        form.reset();
        navigate(from, { replace: true });
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const handleGoogleSignIn = async () => {
    await googleSignIn()
      .then((res) => {
          navigate(from, { replace: true });
        // navigate('/')
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold mb-5">Please Login now!</h1>
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
              <label className="label">
                <a href="/" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Login</button>
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
            New here? <Link to="/signup">Sign Up</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
