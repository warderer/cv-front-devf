import "bootstrap/dist/css/bootstrap.min.css";
import "shards-ui/dist/css/shards.min.css"

import React from 'react';
import Header from "./Header";
import Perfiles from './componentes/Perfiles'
import ProfileCard from "./ProfileCard";
import { Container, Row, Col } from "shards-react";

const PersonaUno = {
    email:'correo@gmai.com',
    nombres:'Susana Distancia',
    apellidos:'García López',
    password:'estarencasa',
    matricula:'031102',
    periodo:6,
    carrera:'Tecnologias de la Informacion',
    facultad:'Ingenieria',
    genero:'F',
    fecha_nacimiento:'23-10-1996',
    telefono:7440334500,
    foto:'http://',
    domicilio:{
        calle:'Calle  Siempreviva',
        numero:3,
        colonia:'San Garabato de las Tunas',
        cp:'15240',
        ciudad:'Springfield',
        estado:'Conocido'
    },
    about:'Hola, soy una persona genial y amante del desarrollo',
    social:{
        facebook:'facebookURL',
        twitter:'twitterURL',
        linkedin:'linkedinURL',
        instagram:'instagramURL'
    }


}



export default function Home() {
    return(
        <div>
            <Row>
                <Col>
                    <Header />
                </Col>
            </Row>
            <Container>
                <Row>
                    <Perfiles/>
                </Row>
            </Container>
        </div>
    )
}