import React, {useState,useEffect} from 'react';
import ModalAdd from '../ModalAdd';
import { useDispatch,useSelector } from 'react-redux';
import { deleteFavoritoAction } from '../actions/favoritosActions'

import Fav from '../../assets/img/fav.png';
import Add from '../../assets/img/User_fill_add.png';
import Trash from '../../assets/img/Trash.png';

import './MenuTop.scss';

export default function MenuTop(){

    const [show, setShow] = useState(false);

    const [showFavs, setShowFavs] = useState(true);

    return (
        <div className="MenuTop">

            <div className="cajas favoritos" onClick={() => setShowFavs(!showFavs)}>FAVORITOS <img className="img1" src={Fav}/></div>

            <div className="cajas agregar" onClick={() => setShow(true)}>AGREGAR <img className="img2" src={Add}/></div>
           
            <ModalAdd onClose={() => setShow(false)} show={show}/>
          
            <DropDown  showFavs={showFavs} />
            
            
        </div>
    );
}

function DropDown(props){


    const dispatch = useDispatch();
    const deleteFav = id => dispatch(deleteFavoritoAction(id)); 

    const favoritos = useSelector(state => state.favoritosReducer.favoritos);

    localStorage.setItem("favoritos", JSON.stringify(favoritos)); 



    return (
        <div className={`dropdown ${props.showFavs ? 'show' : ''}`}>
       {favoritos.map((favorito, index) =>(

        <div className="personaje" key={index}>
        <div className="circular--landscape2">
        <img src={favorito.image}/>
        </div>
         
        <p>{favorito.name}</p>
        <img onClick={() => deleteFav(favorito.id)} className="img3" src={Trash}/>
        <div className="linea"/>
        </div>

        ))}
        </div>
    );
}