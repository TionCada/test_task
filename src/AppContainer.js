import React from "react";
import {connect} from "react-redux";
import App from "./App";

let mapStateToProps = (state) => {
    return {
        isAuthorized: state.authorization.isAuthorized
    }
}

const AppContainer = connect(mapStateToProps)(App);

export default AppContainer;