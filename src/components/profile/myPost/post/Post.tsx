import React from "react";
import s from './Post.module.css'


export type MyPostType = {
    id?: number
    message: string
    likesCount: number
}


function Post(props: MyPostType) {
    return (

        <div>

            <div className={s.postBody}><img src="https://i.yapx.ru/Grj9j.gif"/> {props.message}
            <div>{props.likesCount}</div></div>

        </div>

    )
}

export default Post
