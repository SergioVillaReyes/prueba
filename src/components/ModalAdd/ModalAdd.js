import React, {useEffect,useState } from 'react';
import {URL_API} from '../../utils/constans';
import uuid from 'uuid/v4';


import './ModalAdd.scss';

export default function ModalAdd(props){
    

    const [formValue, setFormValue] =  useState({
        id:"",
        name:"",
        cumple:"",
        colorojos:"",
        colopelo:"",
        genero:"",
        posicion:"",
        imagen:""
    });

    const onChange = e => {
        setFormValue({
            ...formValue,
            id:uuid(),
            [e.target.name]: e.target.value,
            [e.target.cumple]: e.target.value,
            [e.target.colorojos]: e.target.value,
            [e.target.colopelo]: e.target.value,
            [e.target.genero]: e.target.value,
            [e.target.posicion]: e.target.value,
            [e.target.imagen]: e.target.value
        })
    }

    const onSubmit = async (e) => {

        window.location.replace('...');
    }

    console.log('formValue',formValue);

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
                 <form method="post" action={URL_API} onChange={onChange} onSubmit={onSubmit}>
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
                    <input className="inputfile" type="text" name="image" id="file" value="https://previews.123rf.com/images/thesomeday123/thesomeday1231712/thesomeday123171200008/91087328-icono-de-perfil-de-avatar-predeterminado-para-mujer-marcador-de-posici%C3%B3n-de-foto-gris-vector-de-ilus.jpg"/>
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