import React from "react";
import Header from "./Header";
import {connect} from "react-redux";
import {logOut} from "../../redux/authReducer";
import {RootReduxStoreType} from "../../redux/storeReducer";


type mapStatePropsType = {
    isAuth: boolean | null
    login: string | null
    email: string | null
}
type mapDispatchPropsType = {
    logOut:()=>void
}
export type AuthPropsType = mapStatePropsType & mapDispatchPropsType

class HeaderContainer extends React.Component<AuthPropsType> {


    render() {
        return <Header logOut={this.props.logOut} isAuth={this.props.isAuth} login={this.props.login} email={this.props.email}/>
    }


}

const mapStateToProps = (state: RootReduxStoreType): mapStatePropsType => {
    return {
        isAuth: state.auth.isAuth,
        login: state.auth.login,
        email: state.auth.email,

    }
}

export default connect(mapStateToProps, {logOut})(HeaderContainer)