import React from "react";
import {connect} from "react-redux";
import {LoginThunkCreator} from "../../Redux/auth-reducer";
import Login from "./Login";

let mapStateToProps = (state, ownProps) => {
    return {
        displayMessage: ownProps.displayMessage,
        isMessageActive: ownProps.isMessageActive,
        message: ownProps.message
    }
}

const LoginContainer = connect(mapStateToProps, {LoginThunkCreator})(Login);

export default LoginContainer;