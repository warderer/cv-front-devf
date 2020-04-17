import React from "react";
import { Card, CardHeader, CardTitle, CardImg, CardBody, CardFooter, Button, Badge } from "shards-react";
import './ProfileCard.css';

export default function ProfileCard(props) {
    return(
    <Card style={{ maxWidth: "250px" }}>
      <CardImg src="https://place-hold.it/250x200" />
      <CardBody>
        <CardTitle>Susana Distancia López Juárez</CardTitle>
        <p className="ProfileCard-Career">Ingeniería en Sistemas</p>
        <p className="ProfileCard-Gradeage"><strong>Grado:</strong> 10<strong>   /  Edad:</strong> 25 años</p>
        
        <Badge theme="success">Servicio Social</Badge>
        <Badge theme="warning">Prácticas Prof.</Badge>
        <div className="ProfileCard-Separator"> </div>
        
        <span className="ProfileCard-Subtitle">Habilidades</span>
        <div className="ProfileCard-Habilidades">
            <Badge>PHP</Badge>
            <Badge>NodeJS</Badge>
            <Badge>HTML 5</Badge>
            <Badge>MongoDB</Badge>
            <Badge>React</Badge>
        </div>
        <p className="ProfileCard-Moreinfotext">y 6 más...</p>
        <div className="ProfileCard-Separator"> </div>
        
        <span className="ProfileCard-Subtitle">Competencias</span>
        <div className="ProfileCard-Competencias">
            <Badge theme="info">Info</Badge>
            <Badge theme="info">Info</Badge>
            <Badge theme="info">Info</Badge>
            <Badge theme="info">Info</Badge>
            <Badge theme="info">Info</Badge>
        </div>
        <p className="ProfileCard-Moreinfotext">y 6 más...</p>

      </CardBody>
      <CardFooter className="ProfileCard-Updatedate">
          Perfil Actualizado al: 31/03/2020
      </CardFooter>
    </Card>
    );
}



