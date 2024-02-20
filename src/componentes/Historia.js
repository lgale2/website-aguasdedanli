import {Row, Col, Container, Carousel, Card, OverlayTrigger, Tooltip, Button} from "react-bootstrap";
import react,{useState} from "react";
import Carousel1 from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import honestidad from '../assets/img/valores/juramento.png';
import respeto from '../assets/img/valores/el-respeto.png';
import responsabilidad from '../assets/img/valores/responsabilidad.png';
import transparencia from '../assets/img/valores/monitor.png';
import equidad from '../assets/img/valores/equilibrio.png'
import mision from '../assets/img/valores/mision.png';
import vision from '../assets/img/valores/vision.png'

export const Historia  = () =>{

  const [open, setOpen] = useState(false);

    const responsive = {
        superLargeDesktop: {
 
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };
     
      return(


        

          <section className="historia" id="historia">

              <Container>
                  <Row>
                        <Col>
                            <div className="historia-bx">
                            <Carousel  interval={null}>
                            <Carousel.Item>
                                <div class="contenido">
                                     <h2>
                                        DATOS DE LA EMPRESA AGUAS DE DANLÍ
                                    </h2>


                                    <p class="texto2">
                                    Unidad Municipal Desconcentrada Aguas de Danlí, empresa que brinda el servicio de agua potable y saneamiento,
                                    cuenta con 46 empleados permanentes hoy en día la Unidad cuenta con 9,101 usuarios.
                                    
                                    En cuanto a cobertura, Aguas de Danlí tiene establecida la meta de crecimiento hasta lograr el 100% de los servicios de agua potable en los hogares
                                    mediante una gestión empresarial moderna e implementado nuevas tecnologías en sus diversos procesos de acuerdo a su proceso de planificación estratégica
                                    como herramienta a un plazo corto.
                                    </p>
                                </div>
                            </Carousel.Item>


                            <Carousel.Item>
                                <div class="contenido">
                                    <h2>
                                       <li> RELACIONES DE LA EMPRESA AGUAS DE DANLÍ </li>
                                    </h2>


                                    <p class="texto2">
                                   Desplegar acciones que permitan obtener aliados estratégicos, quienes luego puedan emitir mensajes u opiniones que de manera directa o indirecta que respalden
                                   la labor que ejerce Aguas de Danlí, considerando el liderazgo va desde la Junta Directiva, a nivel gerencial como también el respaldo del personal que se cuenta, 
                                   ya que son los voceros oficiales de la empresa en cuanto a su prestigio y solidez.
                                    </p>


                                    <h2 >
                                       <li> EMPRESA PRESTADORA DE SERVICIO </li>
                                    </h2>


                                    <p class="texto2">
                                   Se pertenece activamente a la Asociación Hondureñas de Prestadores (AHPSAS). Como ente de órgano deliberativo de los prestadores de servicio de agua
                                   y saneamiento a nivel nacional.
                                    </p>
                                </div>
                            </Carousel.Item>


                
                           <Carousel.Item>
                               <div class="contenido">
                                <h2 >
                                       <li> RELACIONES INSTITUCIONALES </li>
                                    </h2>


                                    <p class="texto2">
                                   En el marco del sector agua y saneamiento nos regulamos por las leyes, reglamento, acuerdos legales que nos favorecen y respaldan al servicio que brindamos contamos 
                                   de manera especial con el ente regulador el ERSAPS.
                                    </p>
                                </div>
                         </Carousel.Item>
                     </Carousel>

                     <br /><br />



<div id="contenedorprimario">
  <div id="contenedorsecundario">
      <Row xs={1} md={2} className="g-4" style={{ margin:'0 auto'}}  >

        <Col >
          <Card className="tarjeta" >
          <img class="imagen" src={mision} alt="" />
            <Card.Body>
              <h2 class="mision">MISIÓN</h2>
              <hr />
              <p class="texto3">
              Proveer permanentemente los servicios de agua potable, alcantarillado y saneamiento en forma eficiente e incluyente para todos los sectores de la 
            población, orientando al desarrollo sustentable de la Unidad Municipal Desconcentrada Aguas de Danlí, sin comprometer los recursos naturales y fomentando una cultura
            de uso racional del agua que permita mejorar la calidad de los usuarios.
              </p>
            </Card.Body>
          </Card>
        </Col>



        <Col >
          <Card className="tarjeta"  >
          <img class="imagen" src={vision} alt="" />
            <Card.Body>
              <h2 class="mision">VISIÓN</h2>
              <hr />
              <p class="texto3">
              Al 2025 consolidarse como una institución moderna que garantice el acceso, disposición y saneamiento del agua en forma suficiente, saludable, y aceptable, generando un mayor bienestar (impacto) 
                en la población demandante y la sostenibilidad institucional, garantizando la expansión continua y eficiente de la prestación del servicio apoyados por un equipo comprometido responsable y eficiente.
              </p>
            </Card.Body>
          </Card>
        </Col>
        
     
    </Row>
    </div>
    </div>



                     <br /><br /> <br/>

                     <hr/>
                                    <h1>Valores Institucionales</h1>
                                    <br />

                                    <Carousel1 responsive={responsive} infinite={true} className="historia-slider">

                                           <div className="item">
                                                <img src={equidad} alt="Image" />
                                                <h5>Equidad</h5>
                                            </div>
                                           
                                            <div className="item">
                                                <img src={honestidad} alt="Image" />
                                                <h5>Honestidad</h5>
                                            </div>
             
                                            <div className="item">
                                                <img src={respeto} alt="Image" />
                                                <h5>Respeto</h5>
                                            </div>

                                            <div className="item">
                                                <img src={responsabilidad} alt="Image" />
                                                <h5>Responsabilidad</h5>
                                            </div>

                                            <div className="item">
                                                <img src={transparencia} alt="Image" />
                                                <h5>Transparencia</h5>
                                            </div>
                                    </Carousel1>


                    <hr/>

                         
                    <div className="contenido">

   
                    <h3 class="titulo">OBJETIVOS ESTRATÉGICOS 2021-2025</h3>

                        <div className="content-tabs">
                          <div className="content active-content">
                          <h2>OE1</h2>
                          <hr/>

                          <h4 class="texto4">
                            Lograr la autosostenibilidad de la prestadora de servicio.
                          </h4>
                          </div>

                        

                    
                          <div className="content">
                          <h2>OE2</h2>
                          <hr/>

                          <h4 class="texto4">
                            Mejorar la eficiencia y eficacia de la gestión comercial brindando la 
                            adecuada atención al usuario y ampliando el mercado de nuevos usuarios, que permitan la
                            viablidad financiera
                          </h4>
                          </div>



                          <div className="content">
                          <h2 >OE3</h2>
                          <hr/>

                          <h4 class="texto4">
                            Alcanzar adecuados niveles de cobertura y de calidad del servicio con la 
                            concientización del uso adecuado y racional del agua.
                          </h4>
                          </div>



                          <div className="content">
                          <h2>OE4</h2>
                          <hr/>

                          <h4 class="texto4">
                          Optimización de los macro procesos y procesos de apoyo utilizando para ello
                          tecnología de punta.
                          </h4>
                          </div>



                          <div className="content">
                          <h2>OE5</h2>
                          <hr/>

                          <h4 class="texto4">
                          Aumentar progresivamente la cobertura de las prestaciones sanitarias.
                          </h4>
                          </div>

                        </div>
                    </div>
                
                                  
                            </div>
                        </Col>

                  </Row>



       
              </Container>
         
          </section>
      )

}

