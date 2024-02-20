import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import  {ArrowRightCircle} from "react-bootstrap-icons";

import headerImg from "../assets/img/el-ciclo-del-agua.png"
import Lottie from 'react-lottie';
import water from '../static/water3.json'

const waterData = {loop: true, autoplay: true, animationData:water}

export const Banner = () => {

   
    return(
        <section className="banner" id="inicio">
                <Container>
              
                    <Row className="align-items-center">
                    <span className="tagline">
                                   Bienvenido a Aguas de Danli
                            </span>
                  

                        <Col xs={12} md={6} xl={7}>
                            
                      
                            <p class="parrafo">
                                La gestión de la Unidad Municipal Desconcentrada Aguas de Danlí, enmarcada en el sector agua, se ha visto fortalecida con la decisión de 
                                compensar una de las necesidades basicas del ser humano que es brindar un servicio de agua potable encaminado a ser óptimo a satisfacer la población
                                beneficiaria directamente, a la vez contar con una junta directiva y personal calificado un estructura a la población.
                            </p>

                            <p class="parrafo">
                            En este sentido se están impulsando los proyectos de mejoramiento con el fin de alcanzar el 100% en la cobertura de los servicios domiciliarios de agua potable, para ser 
                            percibida como una empresa eficiente, bien administrada y capaz de cumplir sus objetivos, teniendo en cuenta la cobertura del servicio y calidad de atención.
                            </p>
                          
                        </Col>

                        <Col xs={12} md={5} xl={4}>
                        
                        <Lottie  options={waterData} height={400} width={300} />
               

                        </Col>
                    </Row>
                </Container>
        </section>
    )
}