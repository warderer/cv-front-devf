import React, { useState } from "react";
import { Form, FormInput, FormGroup, Container, Row, Col, FormSelect, FormTextarea } from "shards-react";
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
                                    <label>Biografía</label>
                                    <FormTextarea id="about" placeholder="Hablanos un poco acerca de tí" onChange={onChangeInput} />
                            </FormGroup>
                            

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

                            
                            {/* HARDCODED++ FALTA AÑADIR VALUE A PARTIR DE AQUI */}
                            <FormGroup>                    
                                <label>Teléfono</label>
                                <FormInput type="tel" id="telefono" placeholder="Número telefonico" onChange={onChangeInput} />
                            </FormGroup>

                            <FormGroup>                    
                                <label>Fotografía</label>
                                <FormInput type="url" id="foto" placeholder="URL de la fotografía" onChange={onChangeInput} />
                            </FormGroup>

                            <h4>Domicilio</h4>

                            <FormGroup>                    
                                <label>Calle</label>
                                <FormInput type="text" id="calle" placeholder="Nombre de la Calle" onChange={onChangeInput} />
                            </FormGroup>

                            <FormGroup>                    
                                <label>Número</label>
                                <FormInput type="number" id="numero" placeholder="Número exterior" onChange={onChangeInput} />
                            </FormGroup>

                            <FormGroup>                    
                                <label>Colonia</label>
                                <FormInput type="text" id="colonia" placeholder="¿En que colonia vives?" onChange={onChangeInput} />
                            </FormGroup>

                            <FormGroup>                    
                                <label>C.P.</label>
                                <FormInput type="text" id="cp" placeholder="¿Cuál es tu número postal?" onChange={onChangeInput} />
                            </FormGroup>

                            <FormGroup>                    
                                <label>Ciudad</label>
                                <FormInput type="text" id="ciudad" placeholder="Ciudad" onChange={onChangeInput} />
                            </FormGroup>

                            <FormGroup>
                            <label>Estado</label>
                                <FormSelect id="estado" onChange={onChangeInput}>
                                    <option value="no">Seleccione uno...</option>
                                    <option value="Aguascalientes">Aguascalientes</option>
                                    <option value="Baja California">Baja California</option>
                                    <option value="Baja California Sur">Baja California Sur</option>
                                    <option value="Campeche">Campeche</option>
                                    <option value="Chiapas">Chiapas</option>
                                    <option value="Chihuahua">Chihuahua</option>
                                    <option value="Coahuila">Coahuila</option>
                                    <option value="Colima">Colima</option>
                                    <option value="Distrito Federal">Distrito Federal</option>
                                    <option value="Durango">Durango</option>
                                    <option value="Estado de México">Estado de México</option>
                                    <option value="Guanajuato">Guanajuato</option>
                                    <option value="Guerrero">Guerrero</option>
                                    <option value="Hidalgo">Hidalgo</option>
                                    <option value="Jalisco">Jalisco</option>
                                    <option value="Michoacán">Michoacán</option>
                                    <option value="Morelos">Morelos</option>
                                    <option value="Nayarit">Nayarit</option>
                                    <option value="Nuevo León">Nuevo León</option>
                                    <option value="Oaxaca">Oaxaca</option>
                                    <option value="Puebla">Puebla</option>
                                    <option value="Querétaro">Querétaro</option>
                                    <option value="Quintana Roo">Quintana Roo</option>
                                    <option value="San Luis Potosí">San Luis Potosí</option>
                                    <option value="Sinaloa">Sinaloa</option>
                                    <option value="Sonora">Sonora</option>
                                    <option value="Tabasco">Tabasco</option>
                                    <option value="Tamaulipas">Tamaulipas</option>
                                    <option value="Tlaxcala">Tlaxcala</option>
                                    <option value="Veracruz">Veracruz</option>
                                    <option value="Yucatán">Yucatán</option>
                                    <option value="Zacatecas">Zacatecas</option>
                                </FormSelect>
                            </FormGroup>

                            <h4>Perfiles Sociales</h4>
                            <FormGroup>                    
                                <label>Facebook</label>
                                <FormInput type="url" id="facebook" placeholder="URL de Facebook" onChange={onChangeInput} />
                            </FormGroup>
                            <FormGroup>                    
                                <label>Twitter</label>
                                <FormInput type="url" id="twitter" placeholder="URL de Twitter" onChange={onChangeInput} />
                            </FormGroup>
                            <FormGroup>                    
                                <label>Linkedin</label>
                                <FormInput type="url" id="linkedin" placeholder="URL de Linkedin" onChange={onChangeInput} />
                            </FormGroup>
                            <FormGroup>                    
                                <label>Instagram</label>
                                <FormInput type="url" id="instagram" placeholder="URL de Instagram" onChange={onChangeInput} />
                            </FormGroup>

                            <h2>Información Académica</h2>
                            <FormGroup>                    
                                <label>Escuela</label>
                                <FormInput type="text" id="escuela" placeholder="Nombre de la escuela" onChange={onChangeInput} />
                            </FormGroup>
                            
                            {/* AQUI VARIE EL ID DE CIUDAD,ESTADO,PAIS; POR QUE ESTOS SON DE LA ESCUELA Y NO DE LA PERSONA*/}
                            <FormGroup>                    
                                <label>Ciudad</label>
                                <FormInput type="text" id="escuelaCiudad" placeholder="Ciudad de la escuela" onChange={onChangeInput} />
                            </FormGroup>

                            <FormGroup>                    
                                <label>Estado</label>
                                <FormInput type="text" id="escuelaEstado" placeholder="Entidad Federativa de la Escuela" onChange={onChangeInput} />
                            </FormGroup>

                            <FormGroup>                    
                                <label>Fecha de Inicio</label>
                                <FormInput type="date" id="EscuelaInicio" placeholder="¿En que Fecha Iniciaste?" onChange={onChangeInput}/>
                            </FormGroup>

                            <FormGroup>                    
                                <label>Fecha de Termino</label>
                                <FormInput type="date" id="EscuelaTermino" placeholder="¿En que Fecha Terminaste?" onChange={onChangeInput}/>
                            </FormGroup>

                            <FormGroup>                    
                                <label>Grado Obtenido</label>
                                <FormInput type="text" id="escuelaGrado" placeholder="¿Que grado o titulo obtuviste?" onChange={onChangeInput} />
                            </FormGroup>


                            <h2>Experiencia</h2>

                            <FormGroup>                    
                                <label>Puesto</label>
                                <FormInput type="text" id="experienciaPuesto" placeholder="Hablanos un poco acerca de lo que realizaste" onChange={onChangeInput} />
                            </FormGroup>

                            <FormGroup>                    
                                <label>Empresa</label>
                                <FormInput type="text" id="experienciaEmpresa" placeholder="¿En qué empresa/organización?" onChange={onChangeInput} />
                            </FormGroup>

                            <FormGroup>                    
                                <label>Ciudad</label>
                                <FormInput type="text" id="experienciaCiudad" placeholder="Ciudad de la escuela" onChange={onChangeInput} />
                            </FormGroup>

                            <FormGroup>
                            <label>Estado</label>
                                <FormSelect id="experienciaEstado" onChange={onChangeInput}>
                                    <option value="no">Seleccione uno...</option>
                                    <option value="Aguascalientes">Aguascalientes</option>
                                    <option value="Baja California">Baja California</option>
                                    <option value="Baja California Sur">Baja California Sur</option>
                                    <option value="Campeche">Campeche</option>
                                    <option value="Chiapas">Chiapas</option>
                                    <option value="Chihuahua">Chihuahua</option>
                                    <option value="Coahuila">Coahuila</option>
                                    <option value="Colima">Colima</option>
                                    <option value="Distrito Federal">Distrito Federal</option>
                                    <option value="Durango">Durango</option>
                                    <option value="Estado de México">Estado de México</option>
                                    <option value="Guanajuato">Guanajuato</option>
                                    <option value="Guerrero">Guerrero</option>
                                    <option value="Hidalgo">Hidalgo</option>
                                    <option value="Jalisco">Jalisco</option>
                                    <option value="Michoacán">Michoacán</option>
                                    <option value="Morelos">Morelos</option>
                                    <option value="Nayarit">Nayarit</option>
                                    <option value="Nuevo León">Nuevo León</option>
                                    <option value="Oaxaca">Oaxaca</option>
                                    <option value="Puebla">Puebla</option>
                                    <option value="Querétaro">Querétaro</option>
                                    <option value="Quintana Roo">Quintana Roo</option>
                                    <option value="San Luis Potosí">San Luis Potosí</option>
                                    <option value="Sinaloa">Sinaloa</option>
                                    <option value="Sonora">Sonora</option>
                                    <option value="Tabasco">Tabasco</option>
                                    <option value="Tamaulipas">Tamaulipas</option>
                                    <option value="Tlaxcala">Tlaxcala</option>
                                    <option value="Veracruz">Veracruz</option>
                                    <option value="Yucatán">Yucatán</option>
                                    <option value="Zacatecas">Zacatecas</option>
                                </FormSelect>
                            </FormGroup>

                            <FormGroup>
                            <label>País</label>
                                <FormSelect id="experienciaPais" onChange={onChangeInput}>
                                    <option value="MX">México</option>
                                    <option value="EU">Estados Unidos</option>
                                    <option value="CA">Canada</option>
                                    <option value="ES">España</option>
                                    <option value="XY">Otro</option>
                                </FormSelect>
                            </FormGroup>

                            {/* ITERACIONES DE COMPETENCIAS Y HABILIDADES */}

                            <h4>Habilidades</h4>


                            <h4>Competencias</h4>

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