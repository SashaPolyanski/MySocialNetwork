

export type UsersType = {
    id: number
    photoUrl: string
    followed: boolean
    fullName: string
    status: string
    location: {
        city: string
        country: string
    }
}
export type InitialStateType = {
    users: Array<UsersType>
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
type ActionsType = followAcType | unFollowAcType | setUsersType


let initialState: InitialStateType = {
    users: []
}

export const usersReducer = (state: InitialStateType = initialState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        case "FOLLOW":{
            return {
                ...state,
                users: state.users.map(m=>m.id === action.userID ? {...m, followed:true} : m)
            }
        }
        case "UNFOLLOW": {
            return {
                ...state,
                users: state.users.map(m=>m.id === action.userID ? {...m, followed: false} : m)
            }
        }
        case "SET-USERS" : {
            return {
                ...state, users: [...state.users, ...action.users]
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
    }
}
export const UnFollowAC = (userID: number): unFollowAcType => {
    return {
        type: 'UNFOLLOW',
        userID
    }
}
export const SetUsersAC = (users: Array<UsersType>):setUsersType => {
    return {
        type: 'SET-USERS',
        users
    }
}
