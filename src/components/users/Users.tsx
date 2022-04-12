import React from 'react';
import s from "./Users.module.css";
import defaultUsers from "../../assets/img/defaultUsers.gif";
import {followSuccessThunkCreator, UsersType} from "../../redux/usersReducer";
import {NavLink} from 'react-router-dom';
import axios from "axios";


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

    return (
        <div>
            <div>
                {pages.map(p => <span onClick={() => props.onPageChanged(p)}
                                      className={props.currentPage === p ? s.page : ''}>{p} </span>)}

                {props.users.map(m => <div key={m.id}>
                <span>
                    <div>
                        <NavLink to={'/profile/' + m.id}>   <img
                            src={m.photos.small != null ? m.photos.small : defaultUsers}
                            className={s.avatarPhoto}
                            alt=""/></NavLink>
                     </div>
                    <div>{m.followed ?
                        <button

                            disabled={props.followingInProgress.some(id => id === m.id)}

                            onClick={() => {
                                props.unfollowSuccessThunkCreator(m.id)
                            }}>unFollow</button> :
                        <button

                            disabled={props.followingInProgress.some(id => id === m.id)}

                            onClick={() => {
                                props.followSuccessThunkCreator(m.id)

                            }}>Follow</button>}</div>
                </span>
                    <span>
                    <span>
                        <div>{m.name}</div>
                        <div>{m.status}</div>
                    </span>
                    <span>
                        <div>"m.location.city"</div>
                        <div>"m.location.country"</div>
                    </span>
                </span>
                </div>)}
            </div>
        </div>
    );
};

export default Users;