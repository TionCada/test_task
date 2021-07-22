import React from "react";
import {connect} from "react-redux";
import { GetMoviesThunkCreator} from "../../../Redux/movies-reducer";
import Toolbar from "./Toolbar";

let mapStateToProps = (state) => {
    return {
        moviesList: state.movies.data,
        token: state.authorization.token,
        isAuthorized: state.authorization.isAuthorized
    }
}

const ToolbarContainer = connect(mapStateToProps, {GetMoviesThunkCreator})(Toolbar);

export default ToolbarContainer;