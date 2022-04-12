import React from 'react';
import s from './ProfileInfo.module.css'
import Preloader from "../../preloader/Preloader";


type ProfileType={
    profile: {
        aboutMe: string
        photos: {
            small: string
            large: string
        }
    }
}

const ProfileInfo = (props: ProfileType) => {
    if(!props.profile) {
        return <Preloader/>
    }
    return (
        <div>
            <div>
                <img className={s.profileImage} src="https://oiplug.com/wp-content/uploads/2017/03/pexels-photo-115045.jpeg" alt=""/>
            </div>
            <img src={props.profile.photos.large}/>
            <div>{props.profile.aboutMe}</div>
            <div>ava+description</div>
        </div>
    );
};

export default ProfileInfo;