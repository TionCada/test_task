import React from "react";
import {connect} from "react-redux";
import AddMovie from "./UploadMovies";
import {UploadMoviesThunkCreator} from "../../../Redux/movies-reducer";

let mapStateToProps = (state, ownProps) => {
    return {
        moviesList: state.movies.data,
        token: state.authorization.token,
        isInterfaceUpdated: ownProps.isInterfaceUpdated,
        setIsInterfaceUpdated: ownProps.setIsInterfaceUpdated
    }
}

const UploadMoviesContainer = connect(mapStateToProps, {UploadMoviesThunkCreator})(AddMovie);

export default UploadMoviesContainer;