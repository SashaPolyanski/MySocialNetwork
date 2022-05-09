import React, {Component, ComponentType} from 'react';
import {Redirect} from "react-router-dom";
import {RootReduxStoreType} from "../redux/storeReducer";
import {connect} from "react-redux";


type MapStatePropsType = {
    isAuth: boolean
}
let mapStateToProps = (state: RootReduxStoreType): MapStatePropsType => {
    return {
        isAuth: state.auth.isAuth,
    }
}


// export const withAuthRedirect2 = (Component: any) => {
//     class RedirectComponent extends React.Component {
//         render() {
//             if (!this.props.isAuth) return <Redirect to={'/login'}/>
//             return <Component {...this.props}/>
//         }
//     }
//
//     const connectAuthRedirect = connect(mapStateToProps)(RedirectComponent);
//     return connectAuthRedirect
// }


export function withAuthRedirect <T>(Component: ComponentType<T>) {
    const RedirectComponent = (props: MapStatePropsType) => {
        let {isAuth, ...restProps} = props
        if(!isAuth) return <Redirect to={'/login'}/>
        return <Component {...restProps as T}/>

    }

 let connectedRedirectComponent = connect(mapStateToProps)(RedirectComponent)
    return connectedRedirectComponent
}