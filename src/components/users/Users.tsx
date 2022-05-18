import React from 'react';
import s from "./Users.module.css";
import defaultUsers from "../../assets/img/defaultUsers.gif";
import {UsersType} from "../../redux/usersReducer";
import {NavLink} from 'react-router-dom';
import {Button, Pagination} from "@mui/material";


type PropsType = {
    totalUsersCount: number
    pageSize: number
    onPageChanged: (p: number) => void
    currentPage: number
    users: Array<UsersType>
    followingInProgress: Array<number>
    followSuccessThunkCreator: (userID: number) => void
    unfollowSuccessThunkCreator: (userID: number) => void


}

const Users = (props: PropsType) => {


    let totalPage = Math.ceil(props.totalUsersCount / props.pageSize)


    let pages = []
    for (let i = 1; i <= totalPage; i++) (
        pages.push(i)
    )

    const pageChangeHandler = (page: number) => {
        props.onPageChanged(page)
    }

    return (
        <div>
            <div>
                <Pagination className={s.pages} count={totalPage}
                            onChange={(event: React.ChangeEvent<unknown>, page: number) => {
                                pageChangeHandler(page)
                            }} color="primary"/>
                {props.users.map(m => <div className={s.users} key={m.id}>
                <span>
                    <div className={s.user}>
                        <NavLink to={'/profile/' + m.id}>   <img
                            src={m.photos.small != null ? m.photos.small : defaultUsers}
                            className={s.avatarPhoto}
                            alt=""/></NavLink>
                     </div>
                    <div>{m.followed ?
                        <Button className={s.btn} size={'small'} variant={'contained'}

                            disabled={props.followingInProgress.some(id => id === m.id)}

                            onClick={() => {
                                props.unfollowSuccessThunkCreator(m.id)
                            }}>unFollow</Button> :
                        <Button className={s.btn} size={'small'} variant={'contained'}

                            disabled={props.followingInProgress.some(id => id === m.id)}

                            onClick={() => {
                                props.followSuccessThunkCreator(m.id)

                            }}>Follow</Button>}</div>
                </span>
                    <span>
                    <div className={s.user}>
                        <div className={s.userName}>{m.name}</div>
                        <div>{m.status}</div>
                    </div>
                    <div className={s.user}>
                        <div>City: {m.location}</div>
                        <div>Country: </div>
                    </div>
                </span>
                </div>)}
            </div>
        </div>
    );
};

export default Users;