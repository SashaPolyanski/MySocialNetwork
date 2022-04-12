import s from "./Header.module.css";
import React from "react";
import {NavLink} from "react-router-dom";

type PropsType = {
    isAuth: boolean
    login: string | null
    email: string | null
}

function Header(props: PropsType) {
    return (
        <header className={s.header}>
            <img
                src="https://i.pinimg.com/originals/1a/ae/b9/1aaeb92db944020a324c1b1d5bdd1522.gif"
                alt="#"/>
            <span className={s.name}>Social Catwork</span>

            <div className={s.loginContainer}>
                {props.isAuth ?
                    <div>
                        <div>{props.login}</div>
                        <div>{props.email}</div>
                    </div> :
                    <NavLink to={'/login'}>Login</NavLink>}
            </div>

        </header>

    )
}

export default Header