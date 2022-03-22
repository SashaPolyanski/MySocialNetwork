import s from "./Profile.module.css";
import React from "react";

function Profile () {
    return(
        <div className={s.content}>
            <div>
                <img src="https://oiplug.com/wp-content/uploads/2017/03/pexels-photo-115045.jpeg" alt=""/>
            </div>
            <div>ava+description</div>
            <div>my post
                <div>new post</div>
                <div>post 1</div>
                <div>post 2</div>
            </div>


        </div>
    )
}
export default Profile
