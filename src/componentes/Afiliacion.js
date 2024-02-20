
import {Nav , Container, Row, Col, Tab, Card} from 'react-bootstrap';
import  accesibilidad from '../assets/img/afiliacion/accesibilidad.png';
import  seguridad from '../assets/img/afiliacion/proteger.png';
import  velocidad from '../assets/img/afiliacion/rapido.png';
import { AfiliacionCards } from './AfiliacionCards';
import colorSharp2 from "../assets/img/OIP.jpg";
import { BeneficiosCards } from './BeneficiosCards';


import paso1 from '../assets/img/PasosAfiliacion/PASO1.jpeg';
import paso2 from '../assets/img/PasosAfiliacion/PASO2.jpeg';
import paso3 from '../assets/img/PasosAfiliacion/PASO3.jpeg';
import paso5 from '../assets/img/PasosAfiliacion/PASO5.jpeg';
import paso6 from '../assets/img/PasosAfiliacion/PASO6.jpeg';
import paso7 from '../assets/img/PasosAfiliacion/PASO7.jpeg';
import paso8 from '../assets/img/PasosAfiliacion/PASO8.jpeg';
import credito from '../assets/img/credito.png';
export const Afiliacion = ()=>{

     const afiliacion=[
        {
            title: "PRIMER PASO",
            descripcion: "Ingresa a PlayStore",
            imgUrl: paso1},
            {
                title: "SEGUNDO PASO ",
                descripcion: "Selecciona el boton en el buscador y escriba Aguas de Danli",
                imgUrl: paso2},
                {
                    title: "TERCER PASO ",
                    descripcion: "Se visualiza la aplicación Aguas de Danli Consultas Moviles y selecciona Instalar ",
                    imgUrl: paso3},
      
                    
                        {
                            title: "CUARTO PASO ",
                            descripcion: "Agregar su número de cuenta",
                            imgUrl: paso5},

                            {
                                title: "QUINTO PASO ",
                                descripcion: "Verificar su cuenta y colocar sus datos",
                                imgUrl: paso6},
                                {
                                    title: "SEXTO PASO ",
                                    descripcion: "Aparece su cuenta nueva y luego seleciona Saldo y Consumo",
                                    imgUrl: paso7},
                                    {
                                        title: " ",
                                        descripcion: "Verifique su saldo actual del servicio de agua potable",
                                        imgUrl: paso8},
     ];

     const beneficios=[
        {
            title: "Mayor ",
            title1: "rapidez",
            imgUrl: velocidad},
   
            {
               title: "Mayor ",
               title1: "seguridad",
               imgUrl: seguridad},
   
               {
                   title: "Mayor ",
                   title1: "accesibilidad",
                   imgUrl: accesibilidad }
     ]
    return (

    <section className="afiliar" id="afiliacion">
        
         
          <Container>
            <Row>
                <Col>
                <section className="banner1" id="inicio">
                <Row className="align-items-center">
                    <span className="tagline">
                    Herramienta Informativa al Usuario.
                            </span>
                  </Row>
                  </section>
                  
                <br />
            <h3 class="texto1"> Aguas de Danli es una empresa que da el servicio de agua potable más importante del municipio de Danli.</h3>

<br />

<section className="banner1" id="inicio">
                <Row className="align-items-center">
                    <span className="tagline">
                    Afiliarte para obtener tu recibo de pago vía electrónica:
                            </span>
                  </Row>
                  </section>

               
                <br />
                       <h3 class="texto1">De un tiempo para acá Aguas de Danli pone a tu disposición, en consultar el recibo de agua potable de forma móvil, así como pagarlos de esta misma forma.
                        </h3>

                        <br />     
                        <Tab.Container id="afiliar-tabs" defaultActiveKey="first">
                                <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center " id="pills-tab">
                                <Nav.Item>
                                    <Nav.Link eventKey="first" >Pasos para afiliarte</Nav.Link>
                                </Nav.Item>

                                <Nav.Item>
                                    <Nav.Link eventKey="second"> Beneficios al recibir tu recibo </Nav.Link>
                                </Nav.Item>

                                <Nav.Item>
                                <Nav.Link eventKey="third">Lugar en que se realiza el pago</Nav.Link>
                                </Nav.Item>

                                </Nav>


                                <Tab.Content>
                                            <Tab.Pane eventKey="first">
                                                <Row>
                                                    {
                                                        afiliacion.map((afiliacion, index)=>{
                                                            return(
                                                              <AfiliacionCards
                                                              key={index}
                                                              {...afiliacion}
                                                              />
                                                            )
                                                        })
                                                    }
                                                </Row>
                                                <h2>Nota</h2>
                                            <h3 class="texto">
                                            Recordar que en la base de datos sale todo el historial del usuario ejemplo si ha ordenado reparación, cambio de medidor, si tiene pagos de factura vencidas o si el servicio está suspendido, histórico de los metros cúbicos consumidos.
                                            </h3>
                                            </Tab.Pane>
                                           

                                            <Tab.Pane eventKey="second">
                                            

                                            <Row>
                                                    {
                                                        beneficios.map((beneficios, index)=>{
                                                            return(
                                                              <BeneficiosCards
                                                              key={index}
                                                              {...beneficios}
                                                              />
                                                            )
                                                        })
                                                    }
                                                </Row>

                                                <br />
                                                <h2><b>¿Que otras formas puedo ver mi recibo?</b></h2>
                                                <br />
                                                <h4 class="texto">Visitar las oficinas de Atención Al Cliente, con un horario de 8:00 am a 3:30 pm de lunes a viernes con hora corrida.
                                                También se realizan los trabajos pertinentes en varios sectores de cobertura del servicio, contando con una cuadrilla de operación y mantenimiento permanente.
                                                </h4>
                                 
                                            </Tab.Pane>

                                            <Tab.Pane eventKey="third">
                                            <p >Pagar <b> TU </b> recibo a través de tu cuenta en banco</p>
                                            <hr />
                                          
                                            <div className='columna'>
                                           <Row >
                                            <Col  sm={6} md={4} >
                                      
                                            <Card className='tarjetas'  style={{ width: '18rem', height:'26rem'}}>
                                            <Card.Header ><h5 class="titulocard">Pagar TU recibo a través de tu cuenta en banco: </h5></Card.Header>
                                           
                                            <Card.Body>
                                            <Card.Title class="tittlee"> <b> <u>Agencias bancarias</u></b></Card.Title>
                                            <Card.Text class="textoo">
                                                <h5>
                                               <ul>
                                                   <li>Occidente</li>
                                                   <li>BanPais</li>
                                                   <li>Trabajadores</li>
                                                   <li>Ficohsa</li>
                                                   <li>Banhcafe</li>
                                                   <li>Tigo Money</li>
                                                   <li>Banrural</li>
                                               </ul>
                                                </h5>
                                            </Card.Text>
                                            </Card.Body>
                                        </Card>
                                        <br />
                                          </Col>
                                 
                                          <Col  sm={6} md={4} >
                                      
                                      <Card  className='tarjetas' style={{ width: '18rem', height:'26rem'}}>
                                      <Card.Header ><h5 class="titulocard">Puedes pagar <b> TU </b> recibo en línea, solamente brindando tu numero de cuenta</h5></Card.Header>
                                      <Card.Body>
                                      <Card.Title class="tittlee"> <b><u>Agencias bancarias móviles</u></b></Card.Title>
                                      <Card.Text class="textoo">
                                      <h5>
                                         <ul>
                                             <li>BanRural</li>
                                             <li>Banhcafe</li>
                                             <li>Trabajadores</li>
                                             <li>Tigo Money</li>
                                         </ul>
                                          </h5>


                                          
                                      </Card.Text>
                                      <Card.Title class="tittlee"> <h6>Recordándole realizar su llamada al número <b> 2763-5210 </b> y <b> 2763-5241 </b> para actualizar su pago correspondiente</h6></Card.Title>

                                      </Card.Body>
                                  </Card>
                                  <br />
                                    </Col>

                                    <Col  sm={6} md={4} >
                                      
                                      <Card className='tarjetas'  style={{ width: '18rem', height:'26rem'}}>
                                      <Card.Header ><h5 class="titulocard">Puedes pagar <b>TU</b> recibo mediante Transferencia</h5></Card.Header>
                                      <Card.Body class="textocuentas">
                                          
                                      <Card.Title class="tittlee"><h6>Recordándole que se paga adicionalmente <b>lps. 25.00</b>  como comisión de la banca.</h6></Card.Title>
                                      <Card.Title class="tittlee"> <b><u>Cuentas</u></b></Card.Title>
                                    

                                    <ul>
                                            <li><h5>Occidente: 11-414-000974-0</h5></li>
                                            <li><h5>Banpais: 01-380-000-364-2</h5></li>
                                            <li><h5>Ficohsa: 00200013266521</h5></li>
                                            <li><h5>Banco Trabajadores: 21-102-015421-2</h5></li>
                                            <li><h5>BANHCAFE: 004614000014</h5></li>
                                            <li><h5>Banrural: 050-0301-003284-1</h5></li>
                                            <li><h5>Banco Atlántida: 10-10001422-3</h5></li>
                                    </ul>
                                  
                                      </Card.Body>
                                  </Card>
                                  <br />

                                    </Col>
                                     <br />
                                    </Row> 

                                    <Row>
                                    <Col  sm={6} md={4} >
                                      
                                      <Card  className='tarjetas'style={{ width: '18rem', height:'26rem'}}>
                                      <Card.Header ><h5 class="titulocard"> Puedes pagar <b> TU</b> recibo mediante la POS</h5></Card.Header>
                                      <Card.Body>
                                      <Card.Title class="titulocard"><b> Tarjeta de crédito y debito
                                        MasterCard y Visa</b>
                                    </Card.Title>
                              
                                 
                                      <br />
                                     <br />
                                     <Card.Title class="tittlee">  Recordándole que este servicio están en la oficina de Aguas de Danli.</Card.Title>
                                   
                                    
                                      </Card.Body>
                                  </Card>
                                  <br />
                                    </Col>
                        <br />



                        <Col  sm={6} md={4} >
                                      
                                      <Card class="card"  className='tarjetas' style={{ width: '18rem', height:'26rem'}}>
                                      <Card.Header ><h4 class="titulocard">Puedes pagar <b> TU</b> recibo en nuestras ventanillas de atención. </h4></Card.Header>
                                      <Card.Body>
                                      <Card.Title class="tittlee">Aguas de Danlí
                                        Frente al hotel Xalli, B° Pueblo Nuevo
                                        Frente al Mercado Xalli
                                        </Card.Title>
                                     
                                      </Card.Body>
                                  </Card>
                                  <br />
                                    </Col>
                        <br />
                                    </Row>
                                    </div>
<br />
                   
                                            </Tab.Pane>



                                </Tab.Content>

                                </Tab.Container>
                </Col>
            
            </Row>
        </Container>

        <img src={colorSharp2} alt="" className='background-image-right'/>
    </section>
      
    )
}