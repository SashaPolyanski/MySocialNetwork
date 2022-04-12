import React from "react";
import {NavLink} from "react-router-dom";
import s from "./Navbar.module.css"


function Navbar() {
    return (
        <nav className={s.nav}>
            <div className={s.item}><NavLink className={s.itemLink} activeClassName={s.itemLinkActive}
                                             to={'/profile'}>Profile</NavLink></div>
            <div className={s.item}><NavLink className={s.itemLink} activeClassName={s.itemLinkActive}
                                             to={'/dialogs'}>Messages</NavLink></div>
            <div className={s.item}><NavLink className={s.itemLink} activeClassName={s.itemLinkActive}
                                             to={'/news'}>News</NavLink></div>
            <div className={s.item}><NavLink className={s.itemLink} activeClassName={s.itemLinkActive}
                                             to={'/music'}>Music</NavLink></div>
            <div className={s.item}><NavLink className={s.itemLink} activeClassName={s.itemLinkActive}
                                             to={'/settings'}>Settings</NavLink></div>
            <div className={s.item}><NavLink className={s.itemLink} activeClassName={s.itemLinkActive}
                                             to={'/usersAPI'}>Users</NavLink></div>
            <div className={s.item}><NavLink className={s.itemLink} activeClassName={s.itemLinkActive}
                                             to={'/friends'}>Friends</NavLink></div>
        </nav>


    )
}

export default Navbar