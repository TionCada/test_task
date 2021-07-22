import React from "react";
import {connect} from "react-redux";
import MainPage from "./MainPage";
import {GetMoviesThunkCreator, setMovies} from "../../Redux/movies-reducer";
import {removeSessionData} from "../../Redux/auth-reducer";

let mapStateToProps = (state) => {
    return {
        moviesList: state.movies.data,
        token: state.authorization.token,
        isAuthorized: state.authorization.isAuthorized
    }
}

const MainPageContainer = connect(mapStateToProps, {GetMoviesThunkCreator, removeSessionData, setMovies})(MainPage);

export default MainPageContainer;