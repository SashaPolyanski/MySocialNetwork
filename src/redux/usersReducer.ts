import {usersAPI} from "../api/api";
import {RootReduxStoreType} from "./storeReducer";
import {Dispatch} from "redux";
import axios from "axios";
import users from "../components/users/Users";

export type UsersType = {
    id: number
    photos: {
        small: string
        large: string
    }
    followed: boolean
    name: string
    status: string
    location: {
        city: string
        country: string
    }
}
export type InitialStateType = {
    users: Array<UsersType>
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
    followingInProgress: Array<number>
}
type followAcType = {
    type: 'FOLLOW'
    userID: number
}
type unFollowAcType = {
    type: 'UNFOLLOW'
    userID: number
}
type setUsersType = {
    type: 'SET-USERS'
    users: Array<UsersType>
}
type setCurrentPageType = {
    type: 'SET-CURRENT-PAGE'
    currentPage: number
}
type setTotalUserCount = {
    type: 'SET-TOTAL-USER-COUNT'
    totalUsersCount: number
}
type isFetchingType = {
    type: 'TOGGLE-IS-FETCHING'
    isFetching: boolean
}


type ActionsType =
    followAcType
    | unFollowAcType
    | setUsersType
    | setCurrentPageType
    | setTotalUserCount
    | isFetchingType
    | isFollowingProgressType


let initialState: InitialStateType = {
    users: [],
    pageSize: 10,
    totalUsersCount: 10,
    currentPage: 1,
    isFetching: true,
    followingInProgress: [],
}

export const usersReducer = (state: InitialStateType = initialState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        case "FOLLOW": {
            return {
                ...state,
                users: state.users.map(m => m.id === action.userID ? {...m, followed: true} : m)
            }
        }
        case "UNFOLLOW": {
            return {
                ...state,
                users: state.users.map(m => m.id === action.userID ? {...m, followed: false} : m)
            }
        }
        case "SET-USERS" : {
            return {
                ...state, users: action.users
            }
        }
        case "SET-CURRENT-PAGE" : {
            return {
                ...state, currentPage: action.currentPage
            }
        }
        case 'SET-TOTAL-USER-COUNT' : {
            return {
                ...state, totalUsersCount: action.totalUsersCount
            }
        }
        case 'TOGGLE-IS-FETCHING' : {
            return {
                ...state, isFetching: action.isFetching
            }
        }
        case 'TOGGLE-IS-FOLLOWING-PROGRESS' : {
            return {
                ...state,
                followingInProgress: action.isLoading
                    ? [...state.followingInProgress, action.userId]
                    : state.followingInProgress.filter(id => id !== action.userId)

            }
        }


        default:
            return state

    }
}

export const FollowAC = (userID: number): followAcType => {
    return {
        type: 'FOLLOW',
        userID
    } as const
}
export const UnFollowAC = (userID: number): unFollowAcType => {
    return {
        type: 'UNFOLLOW',
        userID
    } as const
}
export const SetUsersAC = (users: Array<UsersType>): setUsersType => {
    return {
        type: 'SET-USERS',
        users
    } as const
}
export const SetCurrentPageAC = (currentPage: number): setCurrentPageType => {
    return {
        type: 'SET-CURRENT-PAGE',
        currentPage
    } as const
}
export const SetTotalUserCount = (totalUsersCount: number): setTotalUserCount => {
    return {
        type: "SET-TOTAL-USER-COUNT",
        totalUsersCount
    } as const
}
export const ToggleIsFetching = (isFetching: boolean): isFetchingType => {
    return {
        type: "TOGGLE-IS-FETCHING",
        isFetching
    } as const
}

type isFollowingProgressType = {
    type: 'TOGGLE-IS-FOLLOWING-PROGRESS'
    isLoading: boolean
    userId: number
}
export const ToggleIsFollowingProgress = (isLoading: boolean, userId: number): isFollowingProgressType => {
    return {
        type: "TOGGLE-IS-FOLLOWING-PROGRESS",
        isLoading,
        userId
    } as const
}


export const getUsersThunkCreator = (currentPage: number, pageSize: number) => {
    return (dispatch: Dispatch<ActionsType>, getState: () => RootReduxStoreType) => {
        getState()
        dispatch(ToggleIsFetching(true));

        usersAPI.getUsers(currentPage, pageSize)
            //.затем выполни эту функцию
            .then(data => {
                dispatch(ToggleIsFetching(false))
                dispatch(SetUsersAC(data.items))
                dispatch(SetTotalUserCount(data.totalCount))
            })
    }
}
export const followSuccessThunkCreator = (userID: number) => {
    return (dispatch: Dispatch<ActionsType>) => {
        dispatch(ToggleIsFollowingProgress(true, userID))


            usersAPI.follow(userID)
            //.затем выполни эту функцию
            .then(response => {
                if (response.data.resultCode === 0) {
                    dispatch(FollowAC(userID))
                    dispatch(ToggleIsFollowingProgress(false, userID))
                }

            })
    }
}
export const unfollowSuccessThunkCreator = (userID: number) => {
    return (dispatch: Dispatch<ActionsType>) => {
        dispatch(ToggleIsFollowingProgress(true, userID))


        usersAPI.unFollow(userID)
            //.затем выполни эту функцию
            .then(response => {
                if (response.data.resultCode === 0) {
                    dispatch(UnFollowAC(userID))
                    dispatch(ToggleIsFollowingProgress(false, userID))
                }

            })
    }
}