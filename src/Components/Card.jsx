import React from "react";
import { Link, useNavigate } from 'react-router-dom'
import { useContextGlobal } from "./utils/global.context";

const Card = ({ dentist }) => {
  const { setFav } = useContextGlobal();
  const addFav = () => { 
  setFav((fav) => [...fav, dentist]);
  };

  return (
    <div className="card">
      <img src="/public/images/doctor.jpg" alt='Dentist'
      width ={100}
      />
      <Link to={"/detail/" + dentist.id}><h3> {dentist.name}</h3></Link>
      <h3>{dentist.username}</h3>
        {/* Ademas deberan integrar la logica para guardar cada Card en el localStorage */}
        <button onClick={addFav} className="favButton"> Fav ✨</button>
    </div>
  );
};

export default Card;
