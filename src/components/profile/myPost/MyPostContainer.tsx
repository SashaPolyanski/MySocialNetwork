import React from "react";
import {AddPostAc, initialStatePropsType, PostsType, UpdateNewPostTextAc} from "../../../redux/profileReducer";
import MyPost from "./MyPost";
import {connect} from "react-redux";
import {RootReduxStoreType} from "../../../redux/storeReducer";
import {Dispatch} from "redux";

type MapStatePropsType = {
    posts: Array<PostsType>
    newPostText: string
}
type MapDispatchPropsType = {
    addPost: () => void
    onPostChange: (text: string) => void
}
export type PostsPropsType = MapStatePropsType & MapDispatchPropsType
const mapStateToProps = (state: RootReduxStoreType): MapStatePropsType => {
    return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText

    }
}
const mapDispatchToProps = (dispatch: Dispatch): MapDispatchPropsType => {
    return {
        addPost: () => {
            dispatch(AddPostAc())
        },
        onPostChange: (text: string) => {
            debugger
            dispatch(UpdateNewPostTextAc(text))
        }
    }
}

const MyPostContainer = connect(mapStateToProps, mapDispatchToProps)(MyPost)

export default MyPostContainer
