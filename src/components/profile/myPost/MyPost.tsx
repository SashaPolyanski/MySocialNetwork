import React from "react";
import Post from "./post/Post";
import {PostsPropsType} from "./MyPostContainer";
import s from './MyPost.module.css'
import {Field, reduxForm} from "redux-form";


function MyPost(props: PostsPropsType) {
    //Указать к какому объекту обращаемся, в данном случае к Textarea

    const onAddPost = (values: any) => {
        // Делаем проверку на null | undefined, что бы удовлетворить TS
        // 3 варианта, как сделать проверку для TS, предпочтение отдается варианту с ? варианта
        //  alert(newPostElement.current && newPostElement.current.value)
        // alert(newPostElement.current?.value))
        // if (newPostElement.current){
        //     alert(newPostElement.current.value)
        // }

            props.addPost(values.newPostText)
        }


    return (

        <div className={s.myPost}>my post
           <ContainerAddNewPostForm onSubmit={onAddPost}/>
            {props.posts.map(post => <Post key={post.id} message={post.message} likesCount={post.likesCount}/>)}
        </div>

    )
}


const AddNewPostForm = (props: any) => {
    return(
        <form onSubmit={props.handleSubmit}><Field component={'textarea'} name={'newPostText'}/>
            <button>post</button>
        </form>
    )
}
 let ContainerAddNewPostForm = reduxForm({form:'ProfileAddNewPostForm'})(AddNewPostForm)
export default MyPost
