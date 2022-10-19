import React from "react";
import { Link } from "react-router-dom";

const Place = ({place}) => {
    const {id, name, img, price} = place;

  return (
    <div className="card card-compact w-96 bg-base-100 shadow-xl">
      <figure>
        <img src={img} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title text-2xl font-mono text-amber-500">{name}</h2>
        <p className="text-lg">Tour Price: <span className="text-orange-500 text-xl font-semibold">{price}</span></p>
        <div className="card-actions justify-end">
          <Link to={`/place/${id}`} className="btn btn-sm btn-primary">Details</Link>
          <button className="btn btn-sm btn-primary">Buy Now</button>
        </div>
      </div>
    </div>
  );
};

export default Place;
