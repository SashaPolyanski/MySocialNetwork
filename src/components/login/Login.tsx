import React from 'react';
import LoginReduxForm from "./LoginForm";

const Login = () => {
    const onSubmit = (formData: any) => {
        console.log(formData)
    }
    return (
            <div>
                <h3>LOGIN: </h3>
                <LoginReduxForm onSubmit={onSubmit}/>

            </div>

    );
};

export default Login;