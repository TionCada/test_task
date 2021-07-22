import React from "react";
import {Redirect, Route} from "react-router-dom";
import ChooseAction from "./Components/ChooseAction/ChooseAction";
import MainPageContainer from "./Components/MainPage/MainPageContainer";

function App(props) {

    return (
        <div>
            <Route exact path='/' render={() => <Redirect to={"/chooseAction"}/>}/>
            <Route path='/chooseAction' render={() => <ChooseAction/>}/>
            <Route path='/mainPage' render={() => <MainPageContainer/>}/>
            {props.isAuthorized ? <Redirect to={"/mainPage"}/> : <Redirect to={"/chooseAction"}/>}
        </div>
    );
}

export default App;
