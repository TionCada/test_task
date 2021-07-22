import React from "react";
import {connect} from "react-redux";
import {GetMoviesThunkCreator, SearchMovieThunkCreator} from "../../../../Redux/movies-reducer";
import SearchMovie from "./SearchMovie";

let mapStateToProps = (state) => {
    return {
        token: state.authorization.token
    }
}

const SearchMovieContainer = connect(mapStateToProps, {SearchMovieThunkCreator, GetMoviesThunkCreator})(SearchMovie);

export default SearchMovieContainer;