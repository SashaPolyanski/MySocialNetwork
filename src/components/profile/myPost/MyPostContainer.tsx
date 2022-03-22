import React from "react";
import Post from "./post/Post";
import {ActionsType, StoreType} from "../../../redux/store";
import {AddPostAc, UpdateNewPostTextAc} from "../../../redux/profileReducer";

type PropsType = {
    store: StoreType
    dispatch:(action: ActionsType)=>void
}

function MyPost(props: PropsType) {
    debugger
    const state = props.store.getState().profilePage;
    //Указать к какому объекту обращаемся, в данном случае к Textarea
    let newPostElement = React.createRef<HTMLTextAreaElement>()
    const addPost = () => {
        // Делаем проверку на null | undefined, что бы удовлетворить TS
        // 3 варианта, как сделать проверку для TS, предпочтение отдается варианту с ? варианта
        //  alert(newPostElement.current && newPostElement.current.value)
        // alert(newPostElement.current?.value))
        // if (newPostElement.current){
        //     alert(newPostElement.current.value)
        // }

            props.dispatch(AddPostAc())
        }

    const onPostChange = () => {
      if(newPostElement.current){
          props.dispatch(UpdateNewPostTextAc(newPostElement.current.value))
      }
    }
    return (
        <div>my post
            <div><textarea ref={newPostElement} value={state.newPostText} onChange={onPostChange}/>
                <button onClick={addPost}>post</button>
            </div>
            {state.posts.map(post => <Post message={post.message} likesCount={post.likesCount}/>)}
        </div>

    )
}

export default MyPost
