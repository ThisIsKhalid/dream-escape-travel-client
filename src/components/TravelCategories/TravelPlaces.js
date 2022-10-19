
import Place from "./Place";
import { FaFighterJet } from "react-icons/fa";
import { useEffect, useState } from "react";


const TravelPlace = () => {
  const [places, setPlaces] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/categories")
      .then((res) => res.json())
      .then((data) => setPlaces(data));
  }, []);

  return (
    <div className="container mx-auto">
        <div className="text-2xl font-mono font-semibold text-fuchsia-500 flex flex-row items-center justify-center">
        <h1 className="mr-5">Choose Your Favourite Place</h1>
        <p><FaFighterJet></FaFighterJet></p>
        </div>
      <div className="grid grid-cols-2 gap-5">
        {places.map((place) => (
          <Place key={place.id} place={place}></Place>
        ))}
      </div>
    </div>
  );
};

export default TravelPlace;
