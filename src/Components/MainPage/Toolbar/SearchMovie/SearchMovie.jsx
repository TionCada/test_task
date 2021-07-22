import React, {useState} from "react";
import s from "./SearchMovie.module.css"
import {Formik, Field, Form} from 'formik';

const SearchMovie = (props) => {

    return (
        <Formik
            initialValues={{searchWord: ''}}

            onSubmit={(values, {setSubmitting}) => {
                props.SearchMovieThunkCreator(props.token, values.searchWord)
                props.setIsSearchExecuted(!props.isSearchExecuted)
                setSubmitting(false);
            }}
        >
            <div className={s.formContainer}>
                <div className={s.searchBar}>
                        <Form>
                            <div className={s.field}>
                                <Field name="searchWord" type="text"/>
                            </div>
                            <div className={s.button}>
                                <button type="submit">Search</button>
                            </div>
                        </Form>
                </div>
                <div className={s.button}>
                    <button type="submit" onClick={()=>{props.GetMoviesThunkCreator(props.token)}}>Reset</button>
                </div>
            </div>
        </Formik>
    );
}

export default SearchMovie;