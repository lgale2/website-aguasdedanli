import { Container, Row, Col } from "react-bootstrap";
import logo from "../assets/img/add.png";
import navIcon1 from '../assets/img/image.png';
import navIcon2 from '../assets/img/whatsapp.png';


export const Footer = () =>{
    return(
        <footer>
            <Container>
                <Row className="align-item-center">
                    <Col className="logoagua" sm={6}>
                        <img src={logo} alt="Logo" />
                    </Col>

                    <Col sm={6} className="text-center text-sm-end">
                        <div className="social-icon">
                        <a href="https://www.facebook.com/profile.php?id=100063747218668"><img src={navIcon1} alt="" /></a>
                        <a href="https://api.whatsapp.com/send/?phone=94203207"><img src={navIcon2} alt="" /></a>
                          
                        </div>
                        <p>CopyRight 2022, Todos los derechos Reservados</p>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}