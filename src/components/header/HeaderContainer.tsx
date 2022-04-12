import React from "react";
import Header from "./Header";
import axios from "axios";
import {connect} from "react-redux";
import {authUserThunkCreator} from "../../redux/authReducer";
import {RootReduxStoreType} from "../../redux/storeReducer";


type mapStatePropsType = {
    isAuth: boolean
    login: string | null
    email: string | null
}
type mapDispatchPropsType = {
    authUserThunkCreator: () => void
}
export type AuthPropsType = mapStatePropsType & mapDispatchPropsType

class HeaderContainer extends React.Component<AuthPropsType> {

    componentDidMount() {
        this.props.authUserThunkCreator()
    }

    render() {
        return <Header isAuth={this.props.isAuth} login={this.props.login} email={this.props.email}/>
    }


}

const mapStateToProps = (state: RootReduxStoreType): mapStatePropsType => {
    return {
        isAuth: state.auth.isAuth,
        login: state.auth.login,
        email: state.auth.email,

    }
}

export default connect(mapStateToProps, {authUserThunkCreator})(HeaderContainer)