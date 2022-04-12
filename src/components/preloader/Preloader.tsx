import React from 'react';
import preLoader from "../../assets/img/preLoad.gif";
import s from './Preloader.module.css'

const Preloader = () => {
    return (
        <div>
            <img className={s.imgBody} src={preLoader}/>
        </div>
    );
};

export default Preloader;