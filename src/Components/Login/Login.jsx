import React from "react";
import s from "./Login.module.css"
import {Formik, Field, Form, ErrorMessage} from 'formik';
import * as Yup from 'yup';

const Login = (props) => {

    return (
        <>
            <Formik
                initialValues={{email: '', password: ''}}
                validationSchema={Yup.object({
                    email: Yup.string()
                        .email('Invalid email address')
                        .required('Required'),
                    password: Yup.string()
                        .required('No password provided.')
                        .min(8, 'Password is too short.')
                        .matches(/[a-zA-Z]/, 'Only Latin letters allowed.')
                })}

                onSubmit={(values, {setSubmitting}) => {
                    const response = props.LoginThunkCreator(values);
                    response.then(function (result) {
                        if (result !== 1) {
                            props.displayMessage(0)
                        }
                    });
                    setSubmitting(false);
                }}
            >
                <div className={s.formContainer}>
                    <p>Login</p>
                    <Form>
                        <div className={s.field}>
                            <label htmlFor="email">Email</label>
                            <Field name="email" type="email"/>
                            <div className={s.error}>
                                <ErrorMessage name="email"/>
                            </div>
                        </div>
                        <div className={s.field}>
                            <label htmlFor="password">Password</label>
                            <Field name="password" type="password"/>
                            <div className={s.error}>
                                <ErrorMessage name="password"/>
                            </div>
                        </div>
                        <div className={s.button}>
                            <button type="submit">Submit</button>
                        </div>
                    </Form>
                </div>
            </Formik>
            {props.isMessageActive && <p className={s.message}>{props.message}</p>}
        </>
    );
}

export default Login;