import { useState } from "react";
import emailjs from '@emailjs/browser';
import { set } from "react-hook-form";



const useForm = (initialData, onValidate) =>{
    const [form, setForm]= useState(initialData);
    const [loading, setLoading] = useState(false);
    const [errors, setErrors] = useState({});

    const sendEmail = (event) =>{
        event.preventDefault()
        const err= onValidate(form);
        setErrors(err)


        if(Object.keys(err).length===0){
            setLoading(true)
            fetch("https://formsubmit.co/ajax/lgalemartinez@yahoo.com", {
                method: "POST",
                headers: { 
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify(
                    {
                        Desde: form.user_email,
                        Para: "lgalemartinez@yahoo.com",
                        Email:`Mensaje enviado por ${form.user_name}`,
                        Contenido:`
                        
                                              Duda o consulta
                    
                       Nombre: ${form.user_name}

                       Correo Electronico: ${form.user_email}
              

                       Mensaje enviado por ${form.user_name} 
                       ${form.user_message}

                        Aguas de Danli 
                        `
                    }
                )
            })
            .then(response => response.json())   
            .then(data=>{  
                console.log(data);
                setForm(initialData);
                setLoading(false);
            })

            .catch(error=>{console.log(error);
                                 setLoading(false)
                                         }                             )
    
        }
   
    }
   

    const handleSubmit = (event)=>{
        event.preventDefault()
        console.log("enviando formulario")
    }

    const handleChange=(event)=>{
        const {name, value}= event.target
        setForm({...form, [name]:value})
    }


    return {form, loading, errors, handleSubmit, handleChange, sendEmail}


}

export default useForm;