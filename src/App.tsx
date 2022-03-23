import React from 'react';
import s from './App.module.css'
import Header from "./components/header/Header";
import Navbar from "./components/navbar/Navbar";
import Profile from "./components/profile/Profile";
import {Redirect, Route, Switch} from "react-router-dom";
import News from "./components/news/News";
import Music from "./components/music/Music";
import Settings from "./components/settings/Settings";
import Friends from "./components/friends/Friends";
import DialogsContainer from "./components/dialogs/DialogsContainer";
import UsersContainer from "./components/users/UsersContainer";


//Уточнить на счет типизации, по ее передаче!!!
function App() {
    return (
        <div className={s.appWrapper}>
            <Header/>
            <Navbar/>
            <div className={s.appWrapperContent}>
                <Switch>
                    <Route exact path={'/'} render={() => <Redirect to={'/Profile'}/>}/>
                    <Route path={'/Profile'} render={() => <Profile/>}/>
                    <Route path={'/Dialogs'} render={() => <DialogsContainer/>}/>
                    <Route path={'/News'} render={() => <News/>}/>
                    <Route path={'/Music'} render={() => <Music/>}/>
                    <Route path={'/Settings'} render={() => <Settings/>}/>
                    <Route path={'/Friends'} render={() => <Friends/>}/>
                    <Route path={'/Users'} render={() => <UsersContainer/>}/>

                </Switch>
            </div>

        </div>

    );
}

export default App;
