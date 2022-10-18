import React, { useContext } from "react";
import { Link } from "react-router-dom";
import img from '../assets/travel.jpg'
import { AuthContext } from "../context/UserContext";

const Home = () => {

  const {user} = useContext(AuthContext);

  return (
    <div className="hero min-h-screen " style={{backgroundImage: `url(${img})`}}>
      <div className="hero-content text-center">
        <div className="max-w-md">
          <h1 className="text-5xl font-bold text-white">Hello <span className="text-orange-500">{user?.email}</span></h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <Link to="/place" className="btn btn-primary">Booking Now</Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
