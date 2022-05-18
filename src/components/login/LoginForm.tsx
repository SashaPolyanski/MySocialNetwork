import React from 'react';
import {Formik} from 'formik';
import * as yup from 'yup'
import s from './LoginForm.module.css'
import {Button, TextField} from "@mui/material";

type LoginFormType = {
    loginSubmit: (email: string, password: string, rememberMe: boolean) => void
    error: string | null
}

const LoginForm = (props: LoginFormType) => {
    const validations = yup.object().shape({
        email: yup.string().typeError('Должно быть строкой').required('Обязательное поле'),
        password: yup.string().typeError('Должно быть строкой').required('Обязательное поле'),

    })

    return (
        <Formik initialValues={
            {
                email: '',
                password: '',
                rememberMe: false
            }

        }
                validateOnBlur
                onSubmit={(values) => {
                    debugger
                    console.log(values)
                    props.loginSubmit(values.email, values.password, values.rememberMe)
                }}
                validationSchema={validations}


        >
            {({
                  values,
                  errors,
                  touched,
                  handleChange,
                  handleBlur,
                  isValid,
                  handleSubmit,
                  dirty,
              }) => {
                return (
                    <div>
                        <div>
                            {/*name обязательно и должно совпадать с initialValues*/}

                            <TextField id='standard-basic' label='email' variant='standard'
                                       type={'text'}
                                       name={'email'}
                                       onChange={handleChange}
                                       onBlur={handleBlur}
                                       value={values.email}
                            />
                            <span>{touched.email && errors.email &&
                                <div className={s.error}>{errors.email}</div>}</span>
                        </div>

                        <div className={s.inpContainer}>
                            <TextField id='standard-basic' label='password' variant='standard'
                                       type={'password'}
                                       name={'password'}
                                       onChange={handleChange}
                                       onBlur={handleBlur}
                                       value={values.password}
                            />
                            <span>{touched.password && errors.password &&
                                <div className={s.error}>{errors.password}</div>}</span>
                        </div>
                        <div className={s.error}>{props.error}</div>
                        <div className={s.inpContainer}><input name={'rememberMe'} onChange={handleChange}
                                                                type="checkbox"/>remember me
                        </div>
                        <Button className={s.btn} variant={'contained'} size={'small'}
                                disabled={!isValid && !dirty}
                                onClick={() => {
                                    handleSubmit()
                                }}
                        >Login
                        </Button>

                    </div>


                )
            }}


        </Formik>

        // <form onSubmit={props.handleSubmit}>
        //     <div><input name={'login'} type="text" placeholder={'login'}/>
        //     </div>
        //     <div><input name={'password'} type="text"
        //                 placeholder={'password'}/></div>

        // </form>
    );
};

export default LoginForm;