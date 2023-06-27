import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Card from '../Components/Card';
import { ContextGlobal } from '../Components/utils/global.context';

const Home = () => {
  const { state, setData } = useContext(ContextGlobal);
 
  return (
    <main className={`home ${state.theme}`}>
      <h1>Home</h1>
      <div className='card-grid'>
        {state.dentistas.map(dentista => (
          <div key={dentista.id}>
            <Link to={`/dentista/${dentista.id}`}>
              <Card name={dentista.name} username={dentista.username} id={dentista.id} />
            </Link>
          </div>
        ))}
      </div>
    </main>
  )
};

export default Home;