import s from "./Profile.module.css";
import React from "react";
import ProfileInfo from "./profileInfo/ProfileInfo";
import MyPostContainer from "./myPost/MyPostContainer";

type ProfileType = {
    profile: {
        aboutMe: string
        photos: {
            small: string
            large: string
        }
        fullName: string
    }
    status: string
    isAuth: boolean | null
    updateStatus: (status: string)=>void
}

function Profile(props: ProfileType) {
    //Проверка на авторизованность пользователя

    return (

        <div className={s.content}>
            <ProfileInfo profile={props.profile} status={props.status} updateStatus={props.updateStatus}/>
            <MyPostContainer/>
        </div>
    )
}

export default Profile
