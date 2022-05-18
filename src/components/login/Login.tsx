import React from 'react';
import {connect, useSelector} from 'react-redux';
import LoginWithFormik from "./LoginForm";
import {loginThunkCreator} from "../../redux/authReducer";
import {RootReduxStoreType} from "../../redux/storeReducer";
import {Redirect} from "react-router-dom";

type mapDispatchPropsType = {
    loginSubmit: (email: string, password: string, rememberMe: boolean) => void
}

export type LoginType = mapDispatchPropsType
const Login = (props: LoginType) => {
    const isAuth = useSelector<RootReduxStoreType, boolean | null>(state => state.auth.isAuth)
    const error = useSelector<RootReduxStoreType, string | null>(state => state.auth.error)
    if (isAuth) {

        return <Redirect to={'/profile'}/>
    }
    return (
        <div>
            <h3>LOGIN: </h3>
            <LoginWithFormik loginSubmit={props.loginSubmit} error={error}/>
        </div>

    );
};

export default connect<{}, mapDispatchPropsType>(null, {loginSubmit: loginThunkCreator})(Login);