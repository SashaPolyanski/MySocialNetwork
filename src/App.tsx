import React, {useEffect} from 'react';
import s from './App.module.css'
import Navbar from "./components/navbar/Navbar";
import {Redirect, Route, Switch} from "react-router-dom";
import News from "./components/news/News";
import Music from "./components/music/Music";
import Settings from "./components/settings/Settings";
import Friends from "./components/friends/Friends";
import DialogsContainer from "./components/dialogs/DialogsContainer";
import UsersContainer from "./components/users/UsersContainer";
import ProfileContainer from "./components/profile/ProfileContainer";
import HeaderContainer from "./components/header/HeaderContainer";
import Login from "./components/login/Login";
import {authUserThunkCreator} from "./redux/authReducer";
import {useDispatch, useSelector} from "react-redux";
import {RootReduxStoreType} from "./redux/storeReducer";
import Preloader from "./common/preloader/Preloader";


//Уточнить на счет типизации, по ее передаче!!!
function App() {
    const isAuth = useSelector<RootReduxStoreType, boolean | null>(state => state.auth.isAuth)
    const dispatch = useDispatch()
    //

    useEffect(() => {
        dispatch(authUserThunkCreator())
    }, [])
    if (!isAuth) {
        return (


            <div>
                {setTimeout(()=>{
                    <Preloader/>
                }, 1000)}

            </div>


        )


    }


    return (
        <div className={s.appWrapper}>
            <HeaderContainer/>
            <Navbar/>
            <div className={s.appWrapperContent}>
                <Switch>
                    <Route exact path={'/'} render={() => <Redirect to={'/profile'}/>}/>
                    {/*Добавление параметров в path происходит через :, добавлять можно скок угодно параметров, ? говорит, что параметр не обязателен*/}
                    <Route path={'/profile/:userID?'} render={() => <ProfileContainer/>}/>
                    <Route path={'/dialogs'} render={() => <DialogsContainer/>}/>
                    <Route path={'/news'} render={() => <News/>}/>
                    <Route path={'/music'} render={() => <Music/>}/>
                    <Route path={'/settings'} render={() => <Settings/>}/>
                    <Route path={'/friends'} render={() => <Friends/>}/>
                    <Route path={'/usersAPI'} render={() => <UsersContainer/>}/>
                    <Route path={'/login'} render={() => <Login/>}/>

                </Switch>
            </div>

        </div>
        // <Basic/>

    );
}

export default App;
