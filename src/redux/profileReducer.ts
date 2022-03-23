import {ActionsType} from "./store";
import post from "../components/profile/myPost/post/Post";

export type AddPostAcType = {
    type: 'ADD-POST'
}
export type UpdateNewPostTextType = {
    type: 'UPDATE-NEW-POST-TEXT'
    newText: string
}

export type PostsType = {
    id: number
    message: string
    likesCount: number
}
export type initialStatePropsType = {
    posts: Array<PostsType>
    newPostText: string
}

let initialState:initialStatePropsType =  {
        posts: [
            {id: 1, message: 'Hi, how are you?', likesCount: 12},
            {id: 1, message: 'Hi, how are you?', likesCount: 15}
        ],
        newPostText: ''
    }

export const profileReducer = (state  = initialState, action: ActionsType): initialStatePropsType => {
    switch (action.type) {
        case 'ADD-POST' : {
          let  newPost = {id: 3, message: state.newPostText, likesCount: 0}
            return {
                ...state,
                posts: [newPost, ...state.posts] ,
                newPostText: ''
            }
        }
        case 'UPDATE-NEW-POST-TEXT' : {
            state.newPostText = action.newText
            return {
                ...state,
            }

        }
        default : return state
    }
}
export const AddPostAc = ():AddPostAcType => {
    return {
        type: 'ADD-POST'
    } as const
}
export const UpdateNewPostTextAc = (newText: string):UpdateNewPostTextType => {
    return {
        type: 'UPDATE-NEW-POST-TEXT',
        newText
    } as const
}
