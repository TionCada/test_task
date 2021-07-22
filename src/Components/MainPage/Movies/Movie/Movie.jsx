import React, {useState} from "react";
import s from "./Movie.module.css"
import {moviesAPI} from "../../../../API/API";

const Movie = (props) => {

    const [isDetailedInfoVisible, setIsDetailedInfoVisible] = useState(false)
    const [detailedInfo, setDetailedInfo] = useState([])

    const getDetailedInfo = async (id, token) => {
        let response = await moviesAPI.getDetailedInfo(id, token).then(result => result.data);
        if (response.status === 1) {
            setDetailedInfo(response.data.actors);
        } else {
            return 0;
        }
    }

    const deleteMovie = async (id, token) => {
        let response = await moviesAPI.deleteMovie(id, token).then(result => result.data)
        if (response.status === 1) {
            props.setIsInterfaceUpdated(!props.isInterfaceUpdated);
        } else {
            return 0;
        }
    }

    return (
        <div className={s.container}>
            <div className={s.title}>
                <div className={s.innerContainer}>
                    <p>{props.movieInfo.title}</p>
                </div>
            </div>
            <div className={s.buttonContainer}>
                <button onClick={() => {
                    getDetailedInfo(props.movieInfo.id, props.token);
                    setIsDetailedInfoVisible(!isDetailedInfoVisible)
                }}>Show more
                </button>
                <button onClick={() => {
                    deleteMovie(props.movieInfo.id, props.token)
                }}>Delete
                </button>
            </div>
            {isDetailedInfoVisible && <div className={s.detailedInfo}>
                <p>Actors: {detailedInfo.map((info, index) => {
                    if (index + 1 === detailedInfo.length) {
                        return <div className={s.movieName}>{info.name}</div>
                    } else {
                        return <div className={s.movieName}>{info.name + ',' + '\xa0'}</div>
                    }

                })}</p>
                <div className={s.format}>
                    <p>Format: {props.movieInfo.format}</p>
                </div>
                <div className={s.year}>
                    <p>Year: {props.movieInfo.year}</p>
                </div>
            </div>}
        </div>
    );
}

export default Movie;