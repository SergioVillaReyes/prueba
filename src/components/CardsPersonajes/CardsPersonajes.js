import React, {useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addFavoritoAction } from '../actions/favoritosActions';
import uuid from 'uuid/v4';
import useFetch from '../../hooks/useFetch';
import Swal from 'sweetalert2';

import './CardsPersonajes.scss';

export default function CardsPersonajes(props){

    const [formValue, setFormValue] =  useState({
        id:"",
        name:"",
        image:""
    });
    const dispatch = useDispatch();
    const addFavorito = state => dispatch(addFavoritoAction(state));


    const onClick = e => {

        e.preventDefault();

        const arar = e.target.value;
        
        const answer_array = arar.split(' - ');

        const name = answer_array[0];
        const image = answer_array[1];

        const favoritosStorage = localStorage.getItem("favoritos");

        const contar = JSON.parse(favoritosStorage);


        console.log('contar',contar.length);

        if(contar.length == 0){

            setFormValue({
                ...formValue,
                id:uuid(),
                name,
                image
            })
    
            addFavorito({
                id:uuid(),
                name,
                image
                });

        }

        if(contar.length == 1){

            if(name == contar[0].name){
                Swal.fire(
                    'Ya seleccionaste a este personaje',
                    '',
                    'warning'
                  )
            }else{

                setFormValue({
                    ...formValue,
                    id:uuid(),
                    name,
                    image
                })
        
                addFavorito({
                    id:uuid(),
                    name,
                    image
                    });

            }

        }



        if(contar.length == 2){

            if(name == contar[0].name || name == contar[1].name){
                Swal.fire(
                    'Ya seleccionaste a este personaje',
                    '',
                    'warning'
                  )
            }else{

                setFormValue({
                    ...formValue,
                    id:uuid(),
                    name,
                    image
                })
        
                addFavorito({
                    id:uuid(),
                    name,
                    image
                    });


            }

        }



        
        if(contar.length == 3){

            if(name == contar[0].name || name == contar[1].name || name == contar[2].name){
                Swal.fire(
                    'Ya seleccionaste a este personaje',
                    '',
                    'warning'
                  )
            }else{

                setFormValue({
                    ...formValue,
                    id:uuid(),
                    name,
                    image
                })
        
                addFavorito({
                    id:uuid(),
                    name,
                    image
                    });

            }

        }

        if(contar.length == 4){

            if(name == contar[0].name || name == contar[1].name || name == contar[2].name || name == contar[3].name){
                Swal.fire(
                    'Ya seleccionaste a este personaje',
                    '',
                    'warning'
                  )
            }else{

                setFormValue({
                    ...formValue,
                    id:uuid(),
                    name,
                    image
                })
        
                addFavorito({
                    id:uuid(),
                    name,
                    image
                    });

            }

        }




        if(contar.length >= 5){
           Swal.fire(
                'Ups!',
                'Solo puedes seleccionar 5 favoritos'
              )
        }



    }

    // localStorage.setItem("favoritos", JSON.stringify(formValue));


    const { url } = props;

    const personajes = useFetch(
        url 
    );


    if(!personajes.result) {
        return 'Loading....'
    }
    
    const results = personajes.result;




    return (
        <div className="contenedor">

                {results.map((personaje, index) =>(
                                <div key={index} className="cardbox">

                                <div className={`card ${personaje.alive}`}>
                 
                                    <div className={`card__img-personaje ${personaje.house}`}>
                                        <div className="circular--landscape">
                                        <img src={personaje.image}/>
                                        </div>
                                    </div>
                    
                                    <div className="card__datos-personaje">
                
                                    <div className="datosTop">
                                    <div className="lista">
                                    <p>{personaje.alive ? 'VIVO' : 'FINADO'} </p> 
                                    <p className="diagonal"> / </p> 
                                    <p>{personaje.hogwartsStudent ? 'ESTUDIANTE' : 'STAFF'} </p>
                                        </div>

<form className="btnFavoritos"  onClick={onClick}>
    <input type="text" className="nombrePersonaje" name="name" value={personaje.name+" - "+personaje.image} />
    {/* <input type="text" className="imgPersonaje" name="image" value={personaje.image} />               */}
</form>

                                    </div>
                
                                    <p className="nombreCaracter">{personaje.name}</p>
                
                                    <div className="datosPersonales">
                                    <p><span>Cumpleanos: </span>{personaje.dateOfBirth}</p>
                                    <p><span>Genero: </span>{personaje.gender}</p>
                                    <p><span>Color de ojos: </span>{personaje.eyeColour}</p>
                                    <p><span>Color de pelo: </span>{personaje.hairColour}</p>
                                    </div>
                
                                    </div>
                                </div>
                            </div> 
                ))}
            

        </div>
    );
}