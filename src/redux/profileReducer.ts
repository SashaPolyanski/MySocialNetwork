import {SendMessageType} from "./dialogsReducer";
import {Dispatch} from "redux";
import {profileAPI, usersAPI} from "../api/api";

export type ActionsType =
    AddPostAcType
    | UpdateNewPostTextType

    | SendMessageType
    | SetUsersProfileType
    | setStatusType

export type AddPostAcType = {
    type: 'ADD-POST'
    newPostText: any
}
export type UpdateNewPostTextType = {
    type: 'UPDATE-NEW-POST-TEXT'
    newText: string
}
export type SetUsersProfileType = {
    type: 'SET-USERS-PROFILE'
    profile: string
}
export type setStatusType = {
    type: 'SET-STATUS'
    status: string
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
    status: string
}

let initialState: initialStatePropsType = {
    posts: [
        {id: 1, message: 'Hi, how are you?', likesCount: 12},
        {id: 1, message: 'Hi, how are you?', likesCount: 15}
    ],
    newPostText: '',
    profile: null,
    status: '',
}

export const profileReducer = (state = initialState, action: ActionsType): initialStatePropsType => {
    switch (action.type) {
        case 'ADD-POST' : {
                let newPost = {id: 3, message: action.newPostText, likesCount: 0}
            return {
                ...state,
                posts: [newPost, ...state.posts],
                newPostText: ''
            }
        }
        case "SET-USERS-PROFILE" : {
            return {...state, profile: action.profile}
        }
        case 'SET-STATUS' : {
            return {...state, status: action.status}
        }

        default :
            return state
    }
}
export const AddPostAc = (newPostText: any): AddPostAcType => {
    return {
        type: 'ADD-POST',
        newPostText
    } as const
}

export const SetUsersProfileAc = (profile: string): SetUsersProfileType => {
    return {
        type: "SET-USERS-PROFILE",
        profile
    } as const
}
export const SetStatus = (status: string): setStatusType => {
    return {
        type: "SET-STATUS",
        status
    } as const
}


export const getUserThunkCreator = (userId: number) => (dispatch: Dispatch<ActionsType>) => {
    usersAPI.getProfile(userId)
        .then(response => {
            dispatch(SetUsersProfileAc(response.data))
            console.log(response)
        })

}
export const getUserStatus = (userId: number) => (dispatch: Dispatch<ActionsType>) => {

    profileAPI.getStatus(userId)
        .then(response => {
            dispatch(SetStatus(response.data))
        })

}
export const updateUserStatus = (status: string) => (dispatch: Dispatch<ActionsType>) => {
    profileAPI.updateStatus(status)
        .then(response => {
            if(response.data.resultCode === 0) {
                dispatch(SetStatus(status))
            }
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

