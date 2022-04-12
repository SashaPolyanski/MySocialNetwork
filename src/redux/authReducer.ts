import {Dispatch} from "redux";
import axios from "axios";
import {usersAPI} from "../api/api";

type InitialStateType = {
    id: number | null
    email: string | null
    login: string | null
    isAuth: boolean
}
type setUserData = {
    type: 'SET-AUTH-USER-DATA'
    data: SetAuthUserDataDataType
}
type ActionsType = setUserData


let initialState: InitialStateType = {
    id: null,
    email: null,
    login: null,
    isAuth: false
}


export const authReducer = (state: InitialStateType = initialState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        case ("SET-AUTH-USER-DATA") : {
            return {
                ...state,
                ...action.data,
                isAuth: true
            }
        }


        default:
            return state

    }
}

export type SetAuthUserDataDataType = {
    id: null | number,
    email: null | string,
    login: null | string,
}

export const SetAuthUserData = (data: SetAuthUserDataDataType): setUserData => {
    return {
        type: 'SET-AUTH-USER-DATA',
        data
    } as const
}

export const authUserThunkCreator = () => {
    return (dispatch: Dispatch<ActionsType>) => {
            usersAPI.auth()
            //.затем выполни эту функцию
            .then(response => {
                if (response.data.resultCode === 0) {
                    dispatch(SetAuthUserData(response.data.data))
                }
            })
    }
}