import React from "react";
import {connect} from "react-redux";
import AddMovie from "./AddMovie";
import {AddMovieThunkCreator} from "../../../Redux/movies-reducer";

let mapStateToProps = (state, ownProps) => {
    return {
        moviesList: state.movies.data,
        token: state.authorization.token,
        isAuthorized: state.authorization.isAuthorized,
        isInterfaceUpdated: ownProps.isInterfaceUpdated,
        setIsInterfaceUpdated: ownProps.setIsInterfaceUpdated
    }
}

const AddMovieContainer = connect(mapStateToProps, {AddMovieThunkCreator})(AddMovie);

export default AddMovieContainer;