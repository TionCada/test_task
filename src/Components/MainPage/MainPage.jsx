import React, {useEffect, useState} from "react";
import AddMovieContainer from "./AddMovie/AddMovieContainer";
import MoviesContainer from "./Movies/MoviesContainer";
import s from "./MainPage.module.css"
import ToolbarContainer from "./Toolbar/ToolbarContainer";
import UploadMoviesContainer from "./UploadMovies/UploadMoviesContainer";

const MainPage = (props) => {

    const [isInterfaceUpdated, setIsInterfaceUpdated] = useState(false)

    useEffect(() => {
        props.GetMoviesThunkCreator(props.token);
    }, [isInterfaceUpdated]);

    const sortByAlphabet = () => {
        const moviesListSorted = props.moviesList.slice().sort(function(a, b){
            if(a.title < b.title) { return -1; }
            if(a.title > b.title) { return 1; }
            return 0;
        })
        props.setMovies(moviesListSorted);
    }

    return (
        <div className={s.container}>
            <div className={s.moviesContainer}>
                <div className={s.item1}>
                    <div className={s.innerContainer}>
                        <div className={s.button1}>
                            <button onClick={()=>{sortByAlphabet()}}>Alphabetize</button>
                        </div>
                        <div className={s.toolbarContainer}>
                            <ToolbarContainer/>
                        </div>
                        <div className={s.button2}>
                            <button onClick={()=>{props.removeSessionData()}}>Log out</button>
                        </div>
                    </div>
                </div>
                <div className={s.item2}>
                    <MoviesContainer isInterfaceUpdated={isInterfaceUpdated}
                                     setIsInterfaceUpdated={setIsInterfaceUpdated}/>
                </div>
            </div>
            <div className={s.addMovieContainer}>
                <AddMovieContainer isInterfaceUpdated={isInterfaceUpdated}
                                   setIsInterfaceUpdated={setIsInterfaceUpdated}/>
                <UploadMoviesContainer/>
            </div>
        </div>
    );
}

export default MainPage;