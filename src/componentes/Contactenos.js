
import React, { useRef } from "react";
import {Col, Row} from "react-bootstrap"

import style from "styled-components";
import mail from '../static/contact.json'
import Lottie from 'react-lottie';
import emailjs from '@emailjs/browser';
import useForm from './useForm';



const mailData = {loop: true, autoplay: true, animationData:mail}



export const Contactenos = () => {
  const initialData = {
    user_name: '',
    user_email: '',
    user_message: '',
    
  }


 const onValidate = (form)=>{
   let isError = false
   let errors = {}
   let regexName = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;
   let regexEmail = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
   let regexComments = /^.{1,255}$/;

   if(!form.user_name.trim()){
     errors.user_name = 'El campo Nombre no debe estar vacío';
     isError = true;
   } 
   else if (!regexName.test(form.user_name)){
      errors.user_name ='El campo Nombre solo acepta letras y espacios.'
      isError= true
    }

   if(!form.user_email.trim()){
    errors.user_email = 'El campo Correo Electronico no debe estar vacío';
    isError = true;
  } else if (!regexEmail.test(form.user_email)){
    errors.user_email ='El campo solo acepta formato de Correo, ejemplo: Joe@gmail.com'
    isError= true
  }


  if(!form.user_message.trim()){
    errors.user_message = 'El campo Mensaje no debe estar vacío';
    isError = true;
  }
  else if (!regexComments.test(form.user_message)){
    errors.user_message ='El campo Mensaje solo acepta 255.'
    isError= true
  }


   return errors
 }


  const {form, errors ,sendEmail, loading, handleSubmit, handleChange} = useForm(initialData, onValidate)




  return (
   
   
    <StyledContactForm className="center" id="contactenos">
        <Row className="align-items-center">
     
   
      <form className="formcontact"  onSubmit={sendEmail} >
        <div class="lottie">
      <Lottie options={mailData} height={400} width={320} />
      </div>
      <div>  <h1>Contactenos</h1></div>
        <label >Name</label>
        <input type="text" name="user_name" onBlur={(e)=>console.log(e.target.value)} value={form.user_name} onChange={handleChange} placeholder="Ingresa su nombre completo" />
      
       { errors.user_name && <div className="alert alert-danger p-xl-1" role="alert">
       <h6>   {errors.user_name}</h6>
        </div>}

        <label>Email</label>
        <input type="email" name="user_email"   onBlur={(e)=>console.log(e.target.value)}  value={form.user_email} onChange={handleChange} placeholder="Ingresa su correo electronico" />
        { errors.user_email && <div className="alert alert-danger p-xl-1 " role="alert">
         <h6> {errors.user_email}</h6>
        </div>}

        <label>Message</label>
        <textarea name="user_message"  onBlur={(e)=>console.log(e.target.value)}  value={form.user_message} onChange={handleChange}  placeholder="Ingresa su consulta " />
       { errors.user_message && <div className="alert alert-danger p-xl-1 " role="alert">
      <h6>   {errors.user_message}</h6>
        </div>}

        <button className='vvd mt-4 w-auto' value="enviar" disabled={loading}>{loading ? "Enviando..": "Enviar"} </button> 
      
      </form>
      <Col xs={12} md={6} xl={7}>
     </Col>
     
      <Col xs={12} md={6} xl={5} >

                     
               
        </Col>
     
      </Row>

    </StyledContactForm>


  );
};


const StyledContactForm = style.div`




  margin:auto;
  margin-top:-60px; 
 
  margin-bottom:2px;
  padding: 50px 120px 50px 120px;
  background: linear-gradient(to bottom, #00339966 0%, #6eddffa7 80%);
  background-position: cover;
  background-size: cover;
  background-repeat: no-repeat;




  form {

   
   
    max-width: 450px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  
    input {
      width: 220%;
      height: 35px;
      padding: 7px;
      outline: none;
      border-radius: 7px;
      border: 1px solid rgb(220, 220, 220);
      &:focus {
        border: 2px solid rgba(0, 206, 158, 1);
      }
    }
    textarea {
      max-width: 220%;
      min-width: 220%;
      width: 100%;
      max-height: 100px;
      min-height: 100px;
      padding: 7px;
      outline: none;
      border-radius: 5px;
      border: 3px solid rgb(220, 220, 220);
      &:focus {
        border: 2px solid rgba(0, 206, 158, 1);
      }
    }

 
    div{
      width:300px;
    
    }

    label {
      margin-top: 1rem;
    }
    input[type="submit"] {
      margin-top: 2rem;
      cursor: pointer;
      background: rgb(0, 53, 118);
      color: white;
      border: none;
    }
  }
`;

