import React from 'react';
import s from './ProfileInfo.module.css'

const ProfileInfo = () => {
    return (
        <div>
            <div>
                <img className={s.profileImage} src="https://oiplug.com/wp-content/uploads/2017/03/pexels-photo-115045.jpeg" alt=""/>
            </div>
            <div>ava+description</div>
        </div>
    );
};

export default ProfileInfo;