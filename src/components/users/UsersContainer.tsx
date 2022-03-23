import {connect} from "react-redux";
import Users from "./Users";
import {RootReduxStoreType} from "../../redux/storeReducer";
import {FollowAC, InitialStateType, SetUsersAC, UnFollowAC, UsersType} from "../../redux/usersReducer";
import {Dispatch} from "redux";


type mapStatePropsType = {
    usersPage: InitialStateType
}
type mapDispatchPropsType = {
    follow: (userID: number) => void
    unFollow: (userID: number) => void
    setUsers: (users: Array<UsersType>) => void
}
export type UsersPropsType = mapStatePropsType & mapDispatchPropsType

const mapStateToProps = (state: RootReduxStoreType): mapStatePropsType => {
    return {
        usersPage: state.usersPage
    }
}
const mapDispatchToProps = (dispatch: Dispatch):mapDispatchPropsType => {
    return {
        follow: (userID: number) => {
            dispatch(FollowAC(userID))
        },
        unFollow: (userID: number) => {
            dispatch(UnFollowAC(userID))
        },
        setUsers: (users: Array<UsersType>) => {
            dispatch(SetUsersAC(users))
        }
    }
}


let UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)

export default UsersContainer