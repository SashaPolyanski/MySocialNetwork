import {authMe} from "../api/api";
import {ThunkDispatch} from "redux-thunk";
import {RootReduxStoreType} from "./storeReducer";
import {isFetchingType, ToggleIsFetching} from "./usersReducer";

export type InitialStateType = {
    id: number | null
    email: string | null
    login: string | null
    isAuth: boolean | null
    error: string | null
}
type setUserData = {
    type: 'SET-AUTH-USER-DATA'
    data: SetAuthUserDataDataType
    isAuth: boolean | null
}
type setError = {
    type: 'SET-ERROR'
    error: string | null
}
type ActionsType = setUserData | setError | isFetchingType


let initialState: InitialStateType = {
    id: null,
    email: null,
    login: null,
    isAuth: null,
    error: null
}


export const authReducer = (state: InitialStateType = initialState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        case ("SET-AUTH-USER-DATA") : {
            debugger
            return {
                ...state,
                ...action.data,
                isAuth: action.isAuth
            }
        }
        case 'SET-ERROR':
            return {...state, error: action.error}


        default:
            return state

    }
}

export type SetAuthUserDataDataType = {
    id: null | number,
    email: null | string,
    login: null | string,


}

export const SetAuthUserData = (data: SetAuthUserDataDataType, isAuth: boolean): setUserData => {
    return {
        type: 'SET-AUTH-USER-DATA',
        data,
        isAuth
    } as const
}
export const setError = (error: string | null) => {
    return {
        type: 'SET-ERROR',
        error
    } as const
}

export const authUserThunkCreator = () => {
    return (dispatch: ThunkDispatch<RootReduxStoreType, unknown, ActionsType>) => {
        dispatch(ToggleIsFetching(true));
        authMe.auth()
            //.затем выполни эту функцию
            .then(response => {
                console.log(response + 'then')
                if (response.data.resultCode === 0) {
                    console.log(response)
                    dispatch(SetAuthUserData(response.data.data, true))
                    dispatch(ToggleIsFetching(false));
                }
            })
    }
}
export const loginThunkCreator = (email: string, password: string, rememberMe?: boolean, isAuth: boolean = true) => {
    return (dispatch: ThunkDispatch<RootReduxStoreType, unknown, ActionsType>) => {
        dispatch(ToggleIsFetching(true));
        authMe.login(email, password, rememberMe, isAuth)
            //.затем выполни эту функцию
            .then(response => {
                if (response.data.resultCode === 0) {
                    dispatch(authUserThunkCreator())
                }
                if (response.data.messages) {
                    dispatch(setError(response.data.messages[0]))
                }
                dispatch(ToggleIsFetching(false));
            })

    }
}
export const logOut = () => (dispatch: ThunkDispatch<RootReduxStoreType, unknown, ActionsType>) => {
    dispatch(ToggleIsFetching(false))
    authMe.logout()

        .then(response => {
            if (response.data.resultCode === 0) {
                dispatch(SetAuthUserData({id: null, email: null, login: null}, false))

            }
        })
}