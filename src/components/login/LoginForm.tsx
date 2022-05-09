import React from 'react';
import {Field, reduxForm} from "redux-form";

const LoginForm = (props: any) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div><Field component={'input'} name={'login'} type="text" placeholder={'login'}/></div>
            <div><Field component={'input'} name={'password'} type="text" placeholder={'password'}/></div>
            <div><Field component={'input'} name={'rememberMe'} type="checkbox"/>remember me</div>
            <div>
                <button>login</button>
            </div>
        </form>
    );
};
const LoginReduxForm = reduxForm({
    // a unique name for the form
    form: 'login'
})(LoginForm)
export default LoginReduxForm;