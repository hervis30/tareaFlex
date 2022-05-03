import React from 'react';
import '../App.css';
import imagenUno from '../img/imagen1.jpg';
import imagenDos from '../img/imagen2.jpg';
import imagenTres from '../img/imagen3.jpg';


const Main = () => {
    return (
        <div className='main'>
            <img src={imagenUno} alt="" />
            <img src={imagenDos} alt="" />
            <img src={imagenTres} alt="" />
        </div>
    )
}

export default Main