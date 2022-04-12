import s from "./Profile.module.css";
import React from "react";
import ProfileInfo from "./profileInfo/ProfileInfo";
import MyPostContainer from "./myPost/MyPostContainer";
import {Redirect} from "react-router-dom";

type ProfileType={
    profile: {
        aboutMe: string
        photos: {
            small: string
            large: string
        }
    }
    isAuth: boolean
}

function Profile(props:ProfileType) {
    //Проверка на авторизованность пользователя
    if(!props.isAuth) {
        return <Redirect to={'/login'}/>
    }

    return (

        <div className={s.content}>

            <ProfileInfo profile={props.profile}/>
            <MyPostContainer/>


        </div>
    )
}

export default Profile
