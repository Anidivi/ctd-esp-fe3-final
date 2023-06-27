import React from "react";
import { Link } from "react-router-dom";
import { ContextGlobal } from "./utils/global.context";

const Card = ({ name, username, id }) => {
  const { state } = React.useContext(ContextGlobal);

  const addFav = () => {
    const favDentista = { name, username, id };
    const storedDentistas = JSON.parse(localStorage.getItem("favDentistas")) || [];
    storedDentistas.push(favDentista);
    localStorage.setItem("favDentistas", JSON.stringify(storedDentistas));
    // Aquí iría la lógica para agregar la Card al localStorage
  };

  return (
    <div className={`card ${state.theme}`}>
      <p>Name: {name}</p>
      <p>Username: {username}</p>
      <p>Id: {id}</p>

      <Link to={`/dentista/${id}`}>Ver detalle</Link>
      {/* No debes olvidar que la Card a su vez sirve como Link hacia la página de detalle */}

      {/* Además, deberás integrar la lógica para guardar cada Card en el localStorage */}
      <button onClick={addFav} className="favButton">
        Add fav
      </button>
    </div>
  );
};

export default Card;