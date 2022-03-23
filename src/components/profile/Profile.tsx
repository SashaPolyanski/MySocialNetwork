import s from "./Profile.module.css";
import React from "react";
import ProfileInfo from "./profileInfo/ProfileInfo";
import MyPostContainer from "./myPost/MyPostContainer";


function Profile() {

    return (
        <div className={s.content}>
            <ProfileInfo/>
            <MyPostContainer/>


        </div>
    )
}

export default Profile
