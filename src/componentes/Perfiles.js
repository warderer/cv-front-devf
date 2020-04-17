// import "bootstrap/dist/css/bootstrap.min.css";
// import "shards-ui/dist/css/shards.min.css"

import React, { useEffect, useState } from 'react';
import Preview from './Preview';

import axios from 'axios';
import ProfileCard from '../ProfileCard';


function Perfiles() {

  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3000/users')
      .then((result) => { 
        console.log(result.data);
        setUsers(result.data)
      }).catch((err) => {
        console.log(err);    
      });
  }, []);
  
  const perfiles = () => {
    if (users.length === 0){
      return <h1>Cargando...</h1>
    } else {
      const listCardUsers = users.map((user) => {
        return(
        <div>
          <Preview 
              nombres={user.nombres} 
              apellidos={user.apellidos}
              edad={user.cv.personal.fecha_naciemiento}
              carrera={user.carrera}
              habilidades={user.cv.habilidad.registro}
              competencias={user.cv.competencia.registro}
              foto={user.cv.personal.foto}
              updated={user.last_updated}
              />
        </div>

      )});
      return listCardUsers
    }
  }

  return (
      <div className="App row">
        {perfiles()}
        <ProfileCard/>
      </div>
  );
}

export default Perfiles;
