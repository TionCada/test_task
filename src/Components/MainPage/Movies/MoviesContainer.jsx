import React from "react";
import {connect} from "react-redux";
import {SearchMovieThunkCreator} from "../../../Redux/movies-reducer";
import Movies from "./Movies";

let mapStateToProps = (state, ownProps) => {
    return {
        moviesList: state.movies.data,
        token: state.authorization.token,
        isInterfaceUpdated: ownProps.isInterfaceUpdated,
        setIsInterfaceUpdated: ownProps.setIsInterfaceUpdated
    }
}

const MoviesContainer = connect(mapStateToProps, {SearchMovieThunkCreator})(Movies);

export default MoviesContainer;