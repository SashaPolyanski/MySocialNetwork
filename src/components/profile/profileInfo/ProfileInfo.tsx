import React from 'react';
import Preloader from "../../../common/preloader/Preloader";
import s from './ProfileInfo.module.css'
import ProfileStatus from "./ProfileStatus";


type ProfileType={
    profile: {
        aboutMe: string
        photos: {
            small: string
            large: string
        }
        fullName: string
    }
    status: string
    updateStatus:(status: string)=>void
}

const ProfileInfo = (props: ProfileType) => {
    if(!props.profile) {
        return <Preloader/>
    }
    console.log(props.status)
    return (
        <div className={s.container}>
            <div className={s.fullName}>{props.profile.fullName}</div>
            <img className={s.profileImg} src={props.profile.photos.large}/>
            <div className={s.description}>description: {props.profile.aboutMe ? <span>{props.profile.aboutMe} </span>: <span>no description</span>}</div>
            <ProfileStatus status={props.status} updateStatus={props.updateStatus}  />
        </div>
    );
};

export default ProfileInfo;