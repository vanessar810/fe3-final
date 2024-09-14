import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useContextGlobal } from '../Components/utils/global.context';



//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Detail = () => {
  const {state} = useContextGlobal();
  const [data, setData]  = useState({});
  const [loading, setLoading] = useState(true);
  const params = useParams();
  console.log(params);
  const url = `https://jsonplaceholder.typicode.com/users/${params.id}`
  useEffect(() => {
  axios(url).then((res) => {
    console.log(res.data)
    setData(res.data);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  })
  .catch((err) => console.log(err));
  }, [])

  // Consumiendo el parametro dinamico de la URL deberan hacer un fetch a un user en especifico

  return (
    <div className={state.theme ? "dark" : "light"}>
    {loading ? ("Espera un momento por favor") : (
      <>
      <h4>Detail Dentist {data.id} </h4>
      <table>
        <thead>
        <tr>
         <th><h4> Name:</h4></th>
         <th><h4>Email:</h4></th>
         <th><h4>Phone:</h4></th>
         <th><h4>Website:</h4></th>
        </tr>
        </thead>
        <tbody>
        <tr>
        <th> <h4>  {data.name} </h4></th>
        <th>  <h4>  {data.email} </h4></th>
        <th>  <h4>  {data.phone} </h4></th>
        <th> <h4>  {data.website} </h4></th>
        </tr>
        </tbody>
      
     
     
      
      {/* <h4>{params.id}</h4> */}
      {/* aqui deberan renderizar la informacion en detalle de un user en especifico */}
      {/* Deberan mostrar el name - email - phone - website por cada user en especifico */}
      </table>
    </>
    )}
    </div>
  );
};

export default Detail