import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import Card from "../Components/Card";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Favs = () => {
    const [favDentistas, setFavDentistas] = useState([])

    useEffect(() => {
        const storedDentistas = JSON.parse(localStorage.getItem('favDentistas'))
        if(storedDentistas){
            setFavDentistas(storedDentistas)
        }
    }, [])

  return (
    <>
      <h1>Dentists Favs</h1>
      <div className="card-grid">
        {favDentistas.map(dentista => (<Card name={dentista.name} username={dentista.username} id={dentista.id}/>))}
        {/* este componente debe consumir los destacados del localStorage */}
        {/* Deberan renderizar una Card por cada uno de ellos */}
      </div>
    </>
  );
};

export default Favs;