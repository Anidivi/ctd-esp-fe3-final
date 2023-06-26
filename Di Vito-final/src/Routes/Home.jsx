import React from 'react';
import axios from 'axios';
import { useState } from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Card from '../Components/Card'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Home = () => {
    const[dentistas, setDentistas] = useState([])
    const api = 'https://jsonplaceholder.typicode.com/users'

    useEffect(() => {
        axios(api)
        .then(res => setDentistas(res.data))
      }, [api])
      console.log(dentistas)

  return (
    <main className="" >
      <h1>Home</h1>
      <div className='card-grid'>
        {dentistas.map(dentista => (<div key={dentista.id}>
            <Link to={`/dentista/${dentista.id}`}>
            <Card name= {dentista.name} username={dentista.username} id={dentista.id}/>
            </Link>
            </div>
            ))}
      </div>
    </main>
  )
}

export default Home