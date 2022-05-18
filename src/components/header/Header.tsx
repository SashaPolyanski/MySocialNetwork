import s from "./Header.module.css";
import React from "react";
import {Redirect} from "react-router-dom";

type PropsType = {
    isAuth: boolean | null
    login: string | null
    email: string | null
    logOut: ()=>void
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
                        <button onClick={()=>{props.logOut()}}>logout</button>
                    </div> :
                    <Redirect to={'login'}/>}
            </div>

        </header>

    )
}

export default Header