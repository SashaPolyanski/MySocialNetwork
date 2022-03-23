import React from 'react';
import {UsersPropsType} from "./UsersContainer";
import s from './Users.module.css'


const Users = (props: UsersPropsType) => {
    //Добавляем if что бы убрать зацикливание, т.к. перед отрисовкой users все время вызывается функция setUsers и засовывает в стрейт наших юзеров
    if(props.usersPage.users.length === 0) {

        props.setUsers([
            {
                id: 1,
                photoUrl:'https://i.gifer.com/2Qv9.gif',
                followed: true,
                fullName: 'Sasha P',
                location: {city: 'Minsk', country: 'Belarus'},
                status: 'I am dump'
            },
            {
                id: 2,
                photoUrl:'https://i.gifer.com/2Qv9.gif',
                followed: false,
                fullName: 'Veronika P',
                location: {city: 'Minsk', country: 'Belarus'},
                status: 'I dont dump'
            },
            {
                id: 3,
                photoUrl:'https://i.gifer.com/2Qv9.gif',
                followed: false,
                fullName: 'Nikita P',
                location: {city: 'Molodechno', country: 'Belarus'},
                status: 'I am dump'
            },
        ])
    }
    return (
        <div>
            {props.usersPage.users.map(m => <div key={m.id}>
                <span>
                    <div ><img src={m.photoUrl} className={s.avatarPhoto} alt=""/></div>
                    <div>{m.followed ? <button onClick={()=>props.unFollow(m.id)}>unFollow</button> : <button onClick={()=>{props.follow(m.id)}}>Follow</button>}</div>
                </span>
                <span>
                    <span>
                        <div>{m.fullName}</div>
                        <div>{m.status}</div>
                    </span>
                    <span>
                        <div>{m.location.city}</div>
                        <div>{m.location.country}</div>
                    </span>
                </span>
            </div>)}
        </div>
    );
};

export default Users;