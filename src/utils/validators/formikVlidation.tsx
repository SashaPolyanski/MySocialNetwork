import React from 'react';
import {Formik} from 'formik';
import * as yup from 'yup'

const Basic = () => {
    const validations = yup.object().shape({
        name: yup.string().typeError('Должно быть строкой').required('Обязательное поле'),
        secondName: yup.string().typeError('Должно быть строкой').required('Обязательное поле'),
        password: yup.string().typeError('Должно быть строкой').required('Обязательное поле'),
        //oneOf проверка совпадают ли пароль
        confirmPassword: yup.string().oneOf([yup.ref('password')],'Пароль не совпадает').required('Обязательно '),
        email: yup.string().email('Введите корректный email').required('Обязательно'),
        confirmEmail: yup.string().email('Введите корректный email').oneOf([yup.ref('email')], 'Email не совпадает').required('Обязательно'),
    })
    return (
        <Formik initialValues={
            {
                name: '',
                secondName: '',
                password: '',
                confirmPassword: '',
                email: '',
                confirmEmail: '',
            }

        }
                validateOnBlur
                onSubmit={(values) => {
                    console.log(values)
                }}
                validationSchema={validations}


        >
            {/*handleChange-вызывается каждый раз, когда мы меняем значение формы*/}
            {/*dirty-изменялись ли когда-то значения в форме*/}
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
                        <p>
                            {/*name обязательно и должно совпадать с initialValues*/}
                            <label htmlFor={'name'}>имя</label>
                            <input
                                type={'text'}
                                name={'name'}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.name}
                            />
                        </p>
                        {touched.name && errors.name && <p>{errors.name}</p>}
                        <p>
                            {/*name обязательно и должно совпадать с initialValues*/}
                            <label htmlFor={'фамилия'}>Фамилия</label>
                            <input
                                type={'text'}
                                name={'secondName'}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.secondName}
                            />
                        </p>
                        {touched.secondName && errors.secondName && <p>{errors.secondName}</p>}
                        <p>
                            {/*name обязательно и должно совпадать с initialValues*/}
                            <label htmlFor={'пароль'}>Пароль</label>
                            <input
                                type={'password'}
                                name={'password'}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.password}
                            />
                        </p>
                        {touched.password && errors.password && <p>{errors.password}</p>}
                        <p>
                            {/*name обязательно и должно совпадать с initialValues*/}
                            <label htmlFor={'Подтвердите пароль'}>Подтвердите пароль</label>
                            <input
                                type={'password'}
                                name={'confirmPassword'}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.confirmPassword}
                            />
                        </p>
                        {touched.confirmPassword && errors.confirmPassword && <p>{errors.confirmPassword}</p>}
                        <p>
                            {/*name обязательно и должно совпадать с initialValues*/}
                            <label htmlFor={'email'}>email</label>
                            <input
                                type={'email'}
                                name={'email'}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.email}
                            />
                        </p>
                        {touched.email && errors.email && <p>{errors.email}</p>}
                        <p>
                            {/*name обязательно и должно совпадать с initialValues*/}
                            <label htmlFor={'Подтвердите email'}>Подтвердите email</label>
                            <input
                                type={'email'}
                                name={'confirmEmail'}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.confirmEmail}
                            />
                        </p>
                        {touched.confirmEmail && errors.confirmEmail && <p>{errors.confirmEmail}</p>}

                        <button
                            disabled={!isValid && !dirty}
                            onClick={(e)=>{handleSubmit()}}
                            type={'submit'}
                        >отправить
                        </button>
                    </div>
                )
            }}


        </Formik>
    )
}


export default Basic;