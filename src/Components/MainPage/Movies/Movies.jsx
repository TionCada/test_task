import React from "react";
import s from "./Movies.module.css"
import Movie from "./Movie/Movie";

const Movies = (props) => {

    let moviesListJSX = props.moviesList.map((movieInfo) => <Movie isInterfaceUpdated={props.isInterfaceUpdated}
                                                                 setIsInterfaceUpdated={props.setIsInterfaceUpdated}
                                                                 token={props.token} movieInfo={movieInfo}/>)

    return (
        <>
            {(moviesListJSX.length > 0) ? moviesListJSX : <p className={s.message}>There is no movies :(</p>}
        </>
    );
}

export default Movies;