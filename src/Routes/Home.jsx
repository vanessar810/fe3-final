import React, { useContext, useEffect, useState } from 'react'
import Card from '../Components/Card'
import { useContextGlobal } from '../Components/utils/global.context';

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Home = () => {
  const {state} = useContextGlobal();
  return (
    <div className={state.theme ? "dark" : "light"}>
      <h1>Home</h1>
        <div className="list-container">{state.data.map((dentist) => (
          <Card key={dentist.id} dentist={dentist}/>
        ))}
    </div>
    </div>
  )
}

export default Home