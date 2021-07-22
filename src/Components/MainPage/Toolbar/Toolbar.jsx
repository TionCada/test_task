import React from "react";
import s from "./Toolbar.module.css"
import SearchMovieContainer from "./SearchMovie/SearchMovieContainer";

const Toolbar = (props) => {

    return (
        <div className={s.container}>
            <SearchMovieContainer />
        </div>
    );
}

export default Toolbar;