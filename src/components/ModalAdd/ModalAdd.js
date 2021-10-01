import React, {useEffect,useState } from 'react';
import {URL_API, url} from '../../utils/constans';
import uuid from 'uuid/v4';
import Swal from 'sweetalert2';


import './ModalAdd.scss';

export default function ModalAdd(props){
    

    const [formValue, setFormValue] =  useState({
        id:"",
        name:"",
        dateOfBirth:"",
        eyeColour:"",
        hairColour:"",
        gender:"",
        posicion:"",
        image:"https://cdn.icon-icons.com/icons2/1378/PNG/512/avatardefault_92824.png"
    });

    const onChange = e => {
        setFormValue({
            ...formValue,
            id:uuid(),
            [e.target.name]: e.target.value
        })
    }

    const onSubmit = async (e) => {

        e.preventDefault();

        const {name, dateOfBirth, eyeColour,  hairColour, gender,  posicion, image} = formValue;

        if( !name || !dateOfBirth || !eyeColour || !hairColour || !gender || !posicion){

            Swal.fire(
                'Espera',
                'Todos los campos son obligatorios',
                'warning'
              )
        
          }else{

            const addPersonaje = JSON.stringify(formValue);

            const respuesta = await fetch(URL_API, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                  },
                body: addPersonaje,
            }); 

            const peticion = await respuesta.json();

            if(peticion){

                Swal.fire({
                    title: 'El personaje '+name+' fue agregado correctamente',
                    confirmButtonText: 'OK',
                  }).then((result) => {
                    if (result.isConfirmed) {
                    props.onClose();
                    setInterval(function(){ window.location = url; }, 1000);
                    }
                  })

            }

          }
    }


    const closeOnEscapeKeyDown = (e) => {
        if((e.charCode || e.keyCode)===27) {
            props.onClose();
        }
    }


    useEffect(() => {
        document.body.addEventListener('keydown',closeOnEscapeKeyDown);
        return function cleanup(){
            document.body.removeEventListener('keydown',closeOnEscapeKeyDown);
        }
    },[])



    

    return (
        <div className={`modal ${props.show ? 'show' : ''}`}>
            <div className="modal-content" onClick={e => e.stopPropagation()}>
                <div className="modal-header">
                    <h4 className="modal-title">Agregar un personaje</h4>
                    <p onClick={props.onClose}>X</p>
                </div>
                 <form onChange={onChange} onSubmit={onSubmit}>
                <div className="modal-body">
                   
                    <div className="inputs">
                    <p>NOMBRE</p>
                    <input className="inp" type="hidden" name="id"/>
                    <input className="inp" type="text" name="name"/>
                    </div> 

                    <div className="inputs">
                    <p>CUMPLEANOS</p>
                    <input className="inp" type="date" name="dateOfBirth"/>
                    </div> 

                    <div className="inputs">
                    <p>COLOR DE OJOS</p>
                    <input className="inp" type="text" name="eyeColour" />
                    </div> 

                    <div className="inputs">
                    <p>COLOR DE PELO</p>
                    <input className="inp" type="text" name="hairColour"/>
                    </div> 

                    <InputsRadio/>

                    <div className="inputs">
                    <p>FOTOGRAFIA</p>
                    <input className="inputfile" type="file" name="image" id="file" />
                    <label for="file">SUBE TU ARCHIVO</label>
                    </div> 
                    

                </div>
                <div className="modal-footer">
                    <button className="button">GUARDAR</button>
                </div>
</form>
            </div>
        </div>
    );
}

function  InputsRadio() {
    

return (
<>
<div className="inputs">
                    <p>GENERO</p>
                    <div className="radios">
                    <p><input className="genero" name="gender" type="radio" value="hombre" id="hombre" />  Hombre</p>
                    <p><input className="genero" name="gender" type="radio" value="mujer" id="mujer" />  Mujer</p>
                    </div>
                    </div> 

                    <div className="inputs">
                    <p>POSICION</p>
                    <div className="radios">
                    <p><input className="posicion"  name="posicion" type="radio" value="estudiante" id="estudiante"  />  Estudiante</p>
                    <p><input className="posicion" name="posicion" type="radio" value="staff"  id="staff" />  Staff</p>
                    </div>
                    </div> 
</>
);
}