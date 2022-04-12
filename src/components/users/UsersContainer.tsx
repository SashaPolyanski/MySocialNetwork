import {connect} from "react-redux";
import {RootReduxStoreType} from "../../redux/storeReducer";
import {
    FollowAC, followSuccessThunkCreator,
    getUsersThunkCreator,
    InitialStateType,
    SetCurrentPageAC,
    ToggleIsFollowingProgress,
    UnFollowAC, unfollowSuccessThunkCreator
} from "../../redux/usersReducer";
import React from "react";
import Users from "./Users";
import Preloader from "../preloader/Preloader";


type mapStatePropsType = {
    usersPage: InitialStateType
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
    followingInProgress: Array<number>
}
type mapDispatchPropsType = {
    follow: (userID: number) => void
    unFollow: (userID: number) => void
    setCurrentPage: (currentPage: number) => void
    ToggleIsFollowingProgress: (isLoading: boolean, userId: number) => void
    getUsersThunkCreator: (currentPage: number, pageSize: number) => void
    followSuccessThunkCreator: (userID: number) => void
    unfollowSuccessThunkCreator: (userID: number) => void
}
export type UsersPropsType = mapStatePropsType & mapDispatchPropsType


class UsersAPI extends React.Component<UsersPropsType, {}> {

    componentDidMount() {
        this.props.getUsersThunkCreator(this.props.currentPage, this.props.pageSize);
    }


    render() {

        const onPageChanged = (p: number) => {
            this.props.getUsersThunkCreator(p, this.props.pageSize);
        }

        return <>
            {this.props.isFetching ? <Preloader/> : null}
            <Users totalUsersCount={this.props.totalUsersCount}
                   pageSize={this.props.pageSize}
                   onPageChanged={onPageChanged}
                   currentPage={this.props.currentPage}
                   users={this.props.usersPage.users}
                   followingInProgress={this.props.followingInProgress}
                   followSuccessThunkCreator={this.props.followSuccessThunkCreator}
                   unfollowSuccessThunkCreator={this.props.unfollowSuccessThunkCreator}
            />
        </>
    }
}


const mapStateToProps = (state: RootReduxStoreType): mapStatePropsType => {
    return {
        //Нужно брать в стейте только то, что нужно данной компоненте, что бы лучше происходила перерисовка компоненты
        usersPage: state.usersPage,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress,
    }
}
//Смотреть ниже почему закоменчен код
// const mapDispatchToProps = (dispatch: Dispatch):mapDispatchPropsType => {
//     return {
//
//         follow: (userID: number) => {
//             dispatch(FollowAC(userID))
//         },
//         unFollow: (userID: number) => {
//             dispatch(UnFollowAC(userID))
//         },
//         setUsers: (users: Array<UsersType>) => {
//             dispatch(SetUsersAC(users))
//         },
//         setCurrentPage: (currentPage: number) => {
//             dispatch(SetCurrentPageAC(currentPage))
//     },
//         SetTotalUsersCount: (totalUsersCount: number) => {
//             dispatch(SetTotalUserCount(totalUsersCount))
//         },
//         ToggleIsFetching: (isFetching: boolean) => {
//             dispatch(ToggleIsFetching(isFetching))
//         }
//     }
//
// }


let UsersContainer = connect(mapStateToProps, {
    //Вместо apDispatchToProps мы можем передать простой объект и connect примит это, как callback и сам все задиспачит
    //Так же можем наши AC назвать так же(follow:follow) и записать все одним словом follow, unFollow,setUsers и пр.
    follow: FollowAC,
    unFollow: UnFollowAC,
    setCurrentPage: SetCurrentPageAC,
    ToggleIsFollowingProgress: ToggleIsFollowingProgress,
    getUsersThunkCreator: getUsersThunkCreator,
    followSuccessThunkCreator: followSuccessThunkCreator,
    unfollowSuccessThunkCreator: unfollowSuccessThunkCreator,
})(UsersAPI)

export default UsersContainer