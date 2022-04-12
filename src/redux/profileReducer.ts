import {SendMessageType, UpdateNewMessageBodyType} from "./dialogsReducer";
import axios from "axios";
import {Dispatch} from "redux";
import {usersAPI} from "../api/api";
import {SetAuthUserData} from "./authReducer";

export type ActionsType =
    AddPostAcType
    | UpdateNewPostTextType
    | UpdateNewMessageBodyType
    | SendMessageType
    | SetUsersProfileType

export type AddPostAcType = {
    type: 'ADD-POST'
}
export type UpdateNewPostTextType = {
    type: 'UPDATE-NEW-POST-TEXT'
    newText: string
}
export type SetUsersProfileType = {
    type: 'SET-USERS-PROFILE'
    profile: string
}

export type PostsType = {
    id: number
    message: string
    likesCount: number
}
export type initialStatePropsType = {
    posts: Array<PostsType>
    newPostText: string
    profile: any
}

let initialState: initialStatePropsType = {
    posts: [
        {id: 1, message: 'Hi, how are you?', likesCount: 12},
        {id: 1, message: 'Hi, how are you?', likesCount: 15}
    ],
    newPostText: '',
    profile: null
}

export const profileReducer = (state = initialState, action: ActionsType): initialStatePropsType => {
    switch (action.type) {
        case 'ADD-POST' : {
            let newPost = {id: 3, message: state.newPostText, likesCount: 0}
            return {
                ...state,
                posts: [newPost, ...state.posts],
                newPostText: ''
            }
        }
        case 'UPDATE-NEW-POST-TEXT' : {
            state.newPostText = action.newText
            return {
                ...state,
            }

        }
        case "SET-USERS-PROFILE" : {
            return {...state, profile: action.profile}
        }
        default :
            return state
    }
}
export const AddPostAc = (): AddPostAcType => {
    return {
        type: 'ADD-POST'
    } as const
}
export const UpdateNewPostTextAc = (newText: string): UpdateNewPostTextType => {
    return {
        type: 'UPDATE-NEW-POST-TEXT',
        newText
    } as const
}
export const SetUsersProfileAc = (profile: string): SetUsersProfileType => {
    return {
        type: "SET-USERS-PROFILE",
        profile
    } as const
}


export const getUserThunkCreator = (userId: number) => (dispatch: Dispatch<ActionsType>) => {
    usersAPI.getProfile(userId)
        .then(response => {
            dispatch(SetUsersProfileAc(response.data))
        })

}

//
// let userID = this.props.match.params.userID
// axios.get(`https://social-network.samuraijs.com/api/1.0/profile/ ` + userID)
//     //.затем выполни эту функцию
//     .then(response => {
//         //Обязательно через props(вызываю не Ac,  функцию , которую мне передает коннект)
//         this.props.SetUsersProfileAc(response.data)
//     })

