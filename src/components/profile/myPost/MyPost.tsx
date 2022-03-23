import React from "react";
import Post from "./post/Post";
import {PostsPropsType} from "./MyPostContainer";


function MyPost(props: PostsPropsType) {
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

            props.addPost()
        }

    const onPostChange = () => {
      if(newPostElement.current){

          props.onPostChange(newPostElement.current.value)
      }
    }
    return (

        <div>my post
            <div><textarea ref={newPostElement} value={props.newPostText} onChange={onPostChange}/>
                <button onClick={addPost}>post</button>
            </div>
            {props.posts.map(post => <Post key={post.id} message={post.message} likesCount={post.likesCount}/>)}
        </div>

    )
}

export default MyPost
