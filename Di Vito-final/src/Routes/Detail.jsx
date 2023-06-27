import React from 'react'
import { useParams } from 'react-router-dom';
import { useContext, useEffect, useState } from 'react';
import { ContextGlobal } from '../Components/utils/global.context';


//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Detail = () => {
    const { id } = useParams();
    const { state } = useContext(ContextGlobal)
    const { setData} = useContext (ContextGlobal)
    const [user, setUser] = useState()
  // Consumiendo el parametro dinamico de la URL deberan hacer un fetch a un user en especifico
 
  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
        const data = await response.json();
        setUser(data);
      } catch (error) {
        console.log(error);
      }
    };
  
    fetchUser();
  }, [id]);

  return (
    <>
      <h1>Detail Dentist id {id}</h1>
      {user && (
        <div className={state.theme}>
          <p>Name: {user.name}</p>
          <p>Email: {user.email}</p>
          <p>Phone: {user.phone}</p>
          <p>Website: {user.website}</p>
        </div>
      )}
    </>
  )}
  export default Detail;