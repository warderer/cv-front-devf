import React, { useEffect, useState } from 'react';
import {
  Badge,
  Card,
  CardHeader,
  CardTitle,
  CardImg,
  CardBody,
  CardFooter,
  Button,
  Modal,
  ModalHeader,
  ModalBody
} from "shards-react";
import Registros from './Registros'

function Preview(props) {

  const [view, setView] = useState(false)

  const toggle = () => setView(!view)

  return (
    <Card style={{ maxWidth: "250px", margin: 20, cursor: "pointer"}} onClick={toggle}>
      <CardImg src={props.foto} alt="Usuario" width="250" height="200"/>
      <CardBody>
        <CardTitle>
          <div>{props.nombres}</div>
          <div>{props.apellidos} </div>
        </CardTitle>
        <p className="ProfileCard-Career">{props.carrera}</p>
        <div className="ProfileCard-Separator"> </div>
        <span className="ProfileCard-Subtitle">Habilidades</span>
        <Registros registros={props.habilidades} tipo={"habilidad"}/>
        <span className="ProfileCard-Moreinfotext">y 6 más...</span>
        <div className="ProfileCard-Separator"> </div>
        <span className="ProfileCard-Subtitle">Competencias</span>
        <Registros registros={props.competencias} tipo={"competencia"}/>
        <p className="ProfileCard-Moreinfotext">y 6 más...</p>

      </CardBody>
      <CardFooter className="ProfileCard-Updatedate">
          Actualizado al: {props.updated.slice(0,10)}
      </CardFooter>
        <Modal open={view} toggle={toggle}>
          <ModalHeader>Header</ModalHeader>
          <ModalBody>Hello there!</ModalBody>
        </Modal>
    </Card>

  );
  
}

export default Preview;
