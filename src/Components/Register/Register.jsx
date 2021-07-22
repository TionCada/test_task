import React from "react";
import s from "./Register.module.css"
import {Formik, Field, Form, ErrorMessage} from 'formik';
import * as Yup from 'yup';

const Register = (props) => {

    return (
        <>
            <Formik
                initialValues={{email: '', name: '', password: '', confirmPassword: ''}}
                validationSchema={Yup.object({
                    email: Yup.string()
                        .email('Invalid email address')
                        .required('Required'),
                    name: Yup.string()
                        .max(15, 'Must be 15 characters or less')
                        .required('Required'),
                    password: Yup.string()
                        .required('No password provided.')
                        .min(8, 'Password is too short.')
                        .matches(/[a-zA-Z]/, 'Only Latin letters allowed.'),
                    confirmPassword: Yup.string()
                        .required('Required')
                        .test('passwords-match', 'Passwords must match', function (value) {
                            return this.parent.password === value
                        })
                })}
                onSubmit={(values, {setSubmitting, resetForm}) => {
                    const response = props.AuthThunkCreator(values)
                    response.then(function(result) {
                        if (result === 1) {
                            props.displayMessage(1)
                        } else {
                            props.displayMessage(0)
                        }
                    });
                    setSubmitting(false);
                    resetForm();
                }}
            >
                <div className={s.formContainer}>
                    <p>Register</p>
                    <Form>
                        <div className={s.field}>
                            <label htmlFor="email">Email</label>
                            <Field name="email" type="email"/>
                            <div className={s.error}>
                                <ErrorMessage name="email"/>
                            </div>
                        </div>
                        <div className={s.field}>
                            <label htmlFor="name">Name</label>
                            <Field name="name" type="text"/>
                            <div className={s.error}>
                                <ErrorMessage name="name"/>
                            </div>
                        </div>
                        <div className={s.field}>
                            <label htmlFor="password">Password</label>
                            <Field name="password" type="password"/>
                            <div className={s.error}>
                                <ErrorMessage name="password"/>
                            </div>
                        </div>
                        <div className={s.field}>
                            <label htmlFor="confirmPassword">Confirm password</label>
                            <Field name="confirmPassword" type="password"/>
                            <div className={s.error}>
                                <ErrorMessage name="confirmPassword"/>
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

export default Register;