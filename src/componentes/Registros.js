import React from "react";
import { Badge } from 'shards-react';

function Registros(props){

  const registros = props.registros;
  console.table(registros)

  const getRegistros = () => {
    if (registros.length === 0){
      return <span>No tiene registros</span>
    } else {
      const listRegistros = registros.map((registro) => {
        return(
          (props.tipo === "habilidad") ? 
          <Badge theme="success" style={{ margin: 1}}>{registro.titulo}</Badge> :
          <Badge theme="info" style={{ margin: 1}}>{registro.titulo}</Badge> 
          

      )});
      return listRegistros
    }
  }

  return (
    <div>
    {getRegistros()}
    </div>
  );
}

export default Registros;