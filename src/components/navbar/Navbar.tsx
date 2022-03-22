
import React from "react";
import s from "./Navbar.module.css"


function Navbar () {
    return(
            <nav className={s.nav}>
                <div className={s.item}><a className={s.itemLink} href={'#'}>Profile</a></div>
                <div className={s.item}><a className={s.itemLink} href={'#'}>Messages</a></div>
                <div className={s.item}><a className={s.itemLink} href={'#'}>News</a></div>
                <div className={s.item}><a className={s.itemLink} href={'#'}>Music</a></div>
                <div className={s.item}><a className={s.itemLink} href={'#'}>Settings</a></div>
                <div className={s.item}><a className={s.itemLink} href={'#'}>Friends</a></div>

            </nav>


    )
}
export default Navbar