import React from "react";
import {connect} from "react-redux";
import {RegisterThunkCreator} from "../../Redux/auth-reducer";
import Register from "./Register";

let mapStateToProps = (state, ownProps) => {
    return {
        displayMessage: ownProps.displayMessage,
        isMessageActive: ownProps.isMessageActive,
        message: ownProps.message
    }
}

const RegisterContainer = connect(mapStateToProps, {AuthThunkCreator: RegisterThunkCreator})(Register);

export default RegisterContainer;