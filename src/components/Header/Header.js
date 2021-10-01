import React from 'react';
import ButtonsCenter from '../ButtonsCenter';
import MenuTop from '../MenuTop';

import { ReactComponent as Logo } from "../../assets/img/logo.svg";

import './Header.scss';

export default function Header(props){

    const { urlestudiantes } = props;

    console.log(urlestudiantes);

    return (
        <>
    <div className="header">
        <MenuTop/>
            <div className="header__logo">
                <Logo/>
            </div>
            <h3>Selecciona tu filtro</h3>
            <ButtonsCenter/>
    </div>
    </>
    );

}

