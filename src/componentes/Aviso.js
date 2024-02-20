import { Container, Row, Col } from "react-bootstrap";
import Accordion from 'react-bootstrap/Accordion';

export const Aviso = () =>{
    return(


      <section className="historia" id="aviso">

      <Container>
         
 

        <Accordion defaultActiveKey="0">
        <Accordion.Item eventKey="0">
          <br />
        <h1>AVISOS</h1>
          <Accordion.Header> <h3>Sobre Cortes</h3> </Accordion.Header>
          <Accordion.Body>
           <p class="parrafo1">Estimado usuarios se les informa que a partir del mes de febrero se harán
              cortes permanentes aquellos usuarios que tiene un saldo pendiente de
            <b> 2 (meses)</b> en delante, se le pide visitar la oficina de <b>Atención al Cliente</b>  en el edificio de 
               Aguas de Danlí a realizar la cancelación de su recibo para evitar el corte de su servicio y cargos por reconexión de lps. 358.00.
                Ofreciendo también en caso que no pueda realizar su pago de toda la mora, hacer plan de pago con una prima de 50% y el saldo 
                restante en cuotas de cuerdo a las políticas de cobranza de Aguas de Danlí.</p>
          </Accordion.Body>
        </Accordion.Item>


        <Accordion.Item eventKey="1">
          <Accordion.Header><h3>Aviso de alto consumo: </h3></Accordion.Header>
          <Accordion.Body>
          <p class="parrafo1">
          Usuario si usted presenta tarifa elevada por su consumo de agua potable de acuerdo al tarifa fija, se le comunica que se les 
          está atendiendo en la oficina de Atención al Cliente en el Edificio de Aguas de Danli y así presentar su reclamos y poderle 
          apoyar con su revisión del medidor e inspecciones de fugas.
          </p>
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="2">
          <Accordion.Header><h3>Aviso por derrame: </h3></Accordion.Header>
          <Accordion.Body>
           <p class="parrafo1">
           Señor Usuario se le pide evitar el derrame del servicio de agua potable en su vivienda, de esta manera evita 
           el llamado de atención, el corte del servicio,  multa por derrame y el pago de facturas elevadas por desperdicio.
           </p>
          </Accordion.Body>
        </Accordion.Item>

     

          <Accordion.Item eventKey="4">
          <Accordion.Header><h3>En caso de Interrupción de la Energía Eléctrica por EEHH: </h3></Accordion.Header>
          <Accordion.Body>
           <p class="parrafo1">
           Le avisamos que el Servicio de agua potable se les suministrara hasta el siguiente día de acuerdo a su horario.
           </p>
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="5">
          <Accordion.Header><h3>Aviso por Reparaciones de Tubería:  </h3></Accordion.Header>
          <Accordion.Body>
           <p class="parrafo1">
           Señor Usuario debido a problemas en tubería en el barrio o colonia, no se les estará suministrando
            el servicio de agua potable en este día. La cuadrilla de Operación y Mantenimiento 
           se encuentra en labores de reparación, una vez finalizados las reparaciones se suministrará el servicio de
            agua potable de acuerdo a su horario en horas tardía.
           </p>
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="3">
          <Accordion.Header><h3>Aviso para ingresar a las oficinas de Agua de Danlí:  </h3></Accordion.Header>
          <Accordion.Body>
           <p class="parrafo1">
           Señor Usuario es obligatorio el uso de Mascarilla, aplicación de gel antibacterial y/o alcohol, uso del pediluvio 
           y la toma de temperatura y recordarle mantener el distanciamiento físico de las personas de 1,5 metros.
           </p>
          </Accordion.Body>
        </Accordion.Item>
        <br />
        <p><b>Para llamar cualquier emergencia puedes contactarnos a los teléfonos 2763-5210 y 2763-5241, celular vía whatsapp 9420-3207.</b></p>
      </Accordion>
      <br />
      <br />
      <br />





      </Container>
 
  </section>
      
     



  
 
    )
}