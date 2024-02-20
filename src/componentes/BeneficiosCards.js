import {Col} from "react-bootstrap";

export const BeneficiosCards = ({ title, title1, imgUrl})=>{
    return(
        <Col sm={6} md={4}>
        <div className="proj-imgbx2">
        
        <img className="iconos2" src={imgUrl} alt="" />
        <div className="proj-txtx2">
            <h4 ><b> {title}</b></h4>
            <h4>{title1}</h4>
        </div>
        
        </div> 
        </Col>
    )
}