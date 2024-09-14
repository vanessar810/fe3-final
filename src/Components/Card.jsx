import React from "react";
import { Link, useNavigate } from 'react-router-dom'
import { useContextGlobal } from "./utils/global.context";
import CardStyles from "../Styles/Card.module.css";

console.log(CardStyles);

const Card = ({ dentist }) => {
  const { state, dispatch } = useContextGlobal();
  const isFav = state.fav.find((fav1) => fav1.id === dentist.id);
  console.log(isFav);
  const addFav = () => { 
    dispatch({ type: isFav ? "REMOVE_FAV" : "ADD_FAV", payload: dentist });
  };

  return (
    <div className={CardStyles.cardContainer}>
      <img src="/images/doctor.jpg" alt='Dentist' className={CardStyles.cardImg}
      width ={100}
      />
      <Link to={"/detail/" + dentist.id}><h3> {dentist.name}</h3></Link>
      <h3>{dentist.username}</h3>
        {/* Ademas deberan integrar la logica para guardar cada Card en el localStorage */}
        <button onClick={addFav} className="favButton">{isFav ? "🌟" : "⭐"}</button>
    </div>
  );
};

export default Card;
