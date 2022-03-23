import s from "./Header.module.css";
import React from "react";



function Header () {
    return(
            <header className={s.header}><img
                src="https://i.pinimg.com/originals/1a/ae/b9/1aaeb92db944020a324c1b1d5bdd1522.gif"
                alt="#"/><span className={s.name}>Social Catwork</span></header>

    )
}
export default Header