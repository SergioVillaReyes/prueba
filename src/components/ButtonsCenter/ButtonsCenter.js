import React, {useState} from 'react'
import CardsPersonajes from '../CardsPersonajes';
import {URL_API,URL_API_ESTUDIANTES,URL_API_ESTAFF} from '../../utils/constans';

import './ButtonsCenter.scss';

export default function ButtonsCenter(){

 const [urlE, setUrlE] = useState(`${URL_API}`);

return (
    <>
    <div className="cajabotones">
    <button onClick={() => setUrlE(`${URL_API_ESTUDIANTES}`)}>ESTUDIANTES</button>
    <button onClick={() => setUrlE(`${URL_API_ESTAFF}`)}>STAFF</button>
    </div>
    <CardsPersonajes url={urlE}/>
    </>
);

}