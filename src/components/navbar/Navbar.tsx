import React from "react";
import {NavLink} from "react-router-dom";
import s from "./Navbar.module.css"


function Navbar() {
    return (
        <nav className={s.nav}>
            <div className={s.item}><NavLink className={s.itemLink} activeClassName={s.itemLinkActive}
                                             to={'/Profile'}>Profile</NavLink></div>
            <div className={s.item}><NavLink className={s.itemLink} activeClassName={s.itemLinkActive}
                                             to={'/Dialogs'}>Messages</NavLink></div>
            <div className={s.item}><NavLink className={s.itemLink} activeClassName={s.itemLinkActive}
                                             to={'/News'}>News</NavLink></div>
            <div className={s.item}><NavLink className={s.itemLink} activeClassName={s.itemLinkActive}
                                             to={'/Music'}>Music</NavLink></div>
            <div className={s.item}><NavLink className={s.itemLink} activeClassName={s.itemLinkActive}
                                             to={'/Settings'}>Settings</NavLink></div>
            <div className={s.item}><NavLink className={s.itemLink} activeClassName={s.itemLinkActive}
                                             to={'/Users'}>Users</NavLink></div>
            <div className={s.item}><NavLink className={s.itemLink} activeClassName={s.itemLinkActive}
                                             to={'/Friends'}>Friends</NavLink></div>
        </nav>


    )
}

export default Navbar