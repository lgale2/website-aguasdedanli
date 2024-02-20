import {Col} from "react-bootstrap";

export const AfiliacionCards = ({ title, descripcion, imgUrl})=>{
    return(
        <Col sm={6} md={4}>
        <div className="proj-imgbx">
        
        <img className="iconos" src={imgUrl} alt="" />
        <div className="proj-txtx">
            <h4>{title}</h4>
            <p><b> {descripcion}</b></p>
        </div>
        
        </div> 
        </Col>
    )
}


