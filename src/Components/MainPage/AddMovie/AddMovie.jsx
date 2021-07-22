import React from "react";
import s from "./AddMovie.module.css"
import {Formik, Field, Form, ErrorMessage, FieldArray} from 'formik';
import * as Yup from 'yup';

const Login = (props) => {

    const initialValues = {
        title: '',
        year: 2020,
        format: 'VHS',
        actors: [
            {
                name: '',
                surname: '',
            }
        ]
    };

    return (
        <div className={s.container}>
            <Formik
                initialValues={initialValues}
                validationSchema={Yup.object({
                    title: Yup.string()
                        .max(25, '25 characters, or less')
                        .min(5, '5 characters, or more')
                        .required('Required'),
                    year: Yup.number()
                        .test('len', 'Enter exactly 4 characters', val => val.toString().length === 4)
                        .required('Required'),
                })}

                onSubmit={(values, {setSubmitting}) => {
                    let response = props.AddMovieThunkCreator(values, `${props.token}`)
                    response.then(function(result) {
                        if (result === 1) {props.setIsInterfaceUpdated(!props.isInterfaceUpdated)}
                    });
                    setSubmitting(false);
                }}
            >
                {({values}) => (
                    <div className={s.formContainer}>
                        <p>Add new movie</p>
                        <Form>
                            <div className={s.field}>
                                <label htmlFor="title">Title</label>
                                <Field name="title" type="text"/>
                                <div className={s.error}>
                                    <ErrorMessage name="title"/>
                                </div>
                            </div>
                            <div className={s.field}>
                                <label htmlFor="year">Year</label>
                                <Field className={s.numberInput} name="year" type="number"/>
                                <div className={s.error}>
                                    <ErrorMessage name="year"/>
                                </div>
                            </div>
                            <div className={s.field}>
                                <div className={s.format}>
                                    <p>Format of the movie</p>
                                </div>
                                <div role="group" >
                                    <label className={s.radio}>
                                        <Field type="radio" name="format" value="VHS" />
                                        VHS
                                    </label>
                                    <label className={s.radio}>
                                        <Field type="radio" name="format" value="DVD" />
                                        DVD
                                    </label>
                                    <label className={s.radio}>
                                        <Field type="radio" name="format" value="Blu-Ray" />
                                        Blu-Ray
                                    </label>
                                </div>
                            </div>
                            <FieldArray name="actors">
                                {({remove, push}) => (
                                    <div className={s.actorsForm}>
                                        <div className={s.actorsTitle}>
                                            <p>Actors</p>
                                        </div>
                                        {values.actors.length > 0 &&
                                        values.actors.map((actor, index) => (
                                            <div key={index}>
                                                <div>
                                                    <div className={s.field}>
                                                        <label htmlFor={`actors.${index}.name`}>Name</label>
                                                        <Field name={`actors.${index}.name`} type="text"/>
                                                        <div className={s.error}>
                                                            <ErrorMessage name={`actors.${index}.name`}/>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div>
                                                    <div className={s.field}>
                                                        <label htmlFor={`actors.${index}.surname`}>Surname</label>
                                                        <Field name={`actors.${index}.surname`} type="text"/>
                                                        <div className={s.error}>
                                                            <ErrorMessage name={`actors.${index}.surname`}/>
                                                        </div>
                                                    </div>
                                                </div>
                                                {(values.actors.length > 1) &&
                                                <div>
                                                    <div className={s.button}>
                                                        <button
                                                            type="button"
                                                            onClick={() => remove(index)}
                                                        >Delete
                                                        </button>
                                                    </div>
                                                </div>}
                                            </div>
                                        ))}
                                        <div className={s.button}>
                                            <button
                                                type="button"
                                                onClick={() => push({name: '', surname: ''})}
                                            >Add Actor
                                            </button>
                                        </div>
                                    </div>
                                )}
                            </FieldArray>
                            <div className={s.button}>
                                <button type="submit">Submit</button>
                            </div>
                        </Form>
                    </div>
                )}
            </Formik>
        </div>
    );
}

export default Login;