import React, { useState } from "react";
import { Form, FormInput, FormGroup, Container, Row, Col, FormSelect } from "shards-react";
import Header from "./Header";


function ProfileForm() {

    /* BLOQUE DE INFORMACIÓN BASICA */
    const [email,setEmail] = useState('');
    const [nombres,setNombres] = useState('');
    const [apellidos,setApellidos] = useState('');
    const [password,setPassword] = useState('');
    const [matricula,setMatricula] = useState('');
    const [periodo,setPeriodo] = useState(0);
    const [carrera,setCarrera] = useState('');
    const [facultad,setFacultad] = useState('');

    /* BLOQUE DE INFORMACIÓN PERSONAL*/
    const [genero,setGenero] = useState('F');
    const [fecha_nacimiento,setFecha_nacimiento] = useState('');

    const onChangeInput = (event) =>{
        const id = event.target.id;
        switch (id) {
            case 'email':
                setEmail(event.target.value);
                break;
            case 'nombres':
                setNombres(event.target.value);
                break; 
            case 'apellidos':
                setApellidos(event.target.value);
                break;  
            case 'password':
                setPassword(event.target.value);
                break; 
            case 'matricula':
                setMatricula(event.target.value);
                break;
            case 'periodo':
                setPeriodo(event.target.value);
                break;
            case 'carrera':
                setCarrera(event.target.value);
                break;
            case 'facultad':
                setFacultad(event.target.value);
                break;
            case 'genero':
                setGenero(event.target.value);
                break;
            case 'fecha_nacimiento':
                setFecha_nacimiento(event.target.value);
                break;                                      
            default:
                break;
        }
    }

    const onSubmitHandler = (e) => {
        e.preventDefault();

        const body = {

        }

        /* AXIOS POST AQUI */

    }



    return (
        <div>
            <Row>
                <Col>
                    <Header />
                </Col>
            </Row>
            <Container>
                <Row>
                    <Col>
                        <Form onSubmit={onSubmitHandler}>
                            <h2>Información Básica</h2>
                            <FormGroup>
                                <label>Correo electrónico</label>
                                <FormInput type="email" className="form-control" id="email" placeholder="Correo electrónico" onChange={onChangeInput} value={email}/>
                            </FormGroup>

                            <FormGroup>                    
                                <label>Contraseña</label>
                                <FormInput type="password" id="password" placeholder="Password" onChange={onChangeInput} value={password} />
                            </FormGroup>

                            <FormGroup>
                                <label>Nombres</label>
                                <FormInput type="text" id="nombres" placeholder="Tu nombre" onChange={onChangeInput} value={nombres}/>
                            </FormGroup>

                            <FormGroup>                    
                                <label>Apellidos</label>
                                <FormInput type="text" id="apellidos" placeholder="Apellidos" onChange={onChangeInput} value={apellidos} />
                            </FormGroup>

                            <FormGroup>
                            <label>Periodo</label>
                                <FormSelect id="periodo" onChange={onChangeInput}>
                                    <option value={periodo}>1</option>
                                    <option value={periodo}>2</option>
                                    <option value={periodo}>3</option>
                                    <option value={periodo}>4</option>
                                    <option value={periodo}>5</option>
                                    <option value={periodo}>6</option>
                                    <option value={periodo}>7</option>
                                    <option value={periodo}>8</option>
                                    <option value={periodo}>9</option>
                                    <option value={periodo}>10</option>
                                    <option value={periodo}>11</option>
                                </FormSelect>
                            </FormGroup>

                            <FormGroup>                    
                                <label>Matricula</label>
                                <FormInput type="text" id="matricula" placeholder="Matricula" onChange={onChangeInput} value={matricula} />
                            </FormGroup>

                            <FormGroup>
                            <label>Carrera</label>
                                <FormSelect id="carrera" onChange={onChangeInput}>
                                    <option value={carrera}>Tecnologias de la Informacion</option>
                                    <option value={carrera}>Derecho</option>
                                    <option value={carrera}>Administracion de Empresas</option>
                                    <option value={carrera}>Desarrollo de Negocios</option>
                                    <option value={carrera}>Relaciones Internacionales</option>
                                    <option value={carrera}>Ingenieria Civil</option>
                                    <option value={carrera}>Ingenieria Biomedica</option>
                                    <option value={carrera}>Medicina</option>
                                </FormSelect>
                            </FormGroup>

                            <FormGroup>
                            <label>Facultad</label>
                                <FormSelect id="facultad" onChange={onChangeInput}>
                                    <option value={facultad}>Ingenieria</option>
                                    <option value={facultad}>Ciencias de La Salud</option>
                                    <option value={facultad}>Humanidades</option>
                                    <option value={facultad}>Administracion</option>
                                </FormSelect>
                            </FormGroup>
    
                            <h2>Información Personal</h2>
                            
                            <FormGroup>
                            <label>Genero</label>
                                <FormSelect id="genero" onChange={onChangeInput}>
                                    <option value={genero}>F</option>
                                    <option value={genero}>M</option>
                                </FormSelect>
                            </FormGroup>

                            <FormGroup>                    
                                <label>Fecha de Nacimiento</label>
                                <FormInput type="date" id="fecha_nacimiento" placeholder="Fecha de Nacimiento" onChange={onChangeInput} value={fecha_nacimiento}/>
                            </FormGroup>

                            
                        </Form>
                    </Col>
                    <Col>
                        Preview aquí.
                    </Col>

                </Row>
            </Container>
        </div>



    );
}

export default ProfileForm;