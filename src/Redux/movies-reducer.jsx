import { moviesAPI} from "../API/API";

const SET_MOVIES = 'test_task/movies/GET_MOVIES';
const ADD_MOVIE = 'test_task/movies/ADD_MOVIE';

let initialState = {
    data: [],
    meta: {
        total: 0
    },
};

const moviesReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_MOVIES:
            return {
                ...state,
                data: [...action.data.data],
                meta: {...action.meta}
            }
        case ADD_MOVIE:
            return {
                ...state,
                data: [...state.data, ...action.data],
            }
        default:
            return state;
    }
}

export const setMovies = (data, meta) => ({
    type: SET_MOVIES,
    data: {data, meta}
});

export const addMovie = (data) => ({
    type: ADD_MOVIE,
    data: {data}
});

export const GetMoviesThunkCreator = (token) =>
    async (dispatch) => {
        let response = await moviesAPI.getMovies(token)
            .then(result => result.data);
        if (response.status === 1) {
            dispatch(setMovies(response.data, response.meta))
        }
    }

export const SearchMovieThunkCreator = (token, searchWord) =>
    async (dispatch) => {
        let response = await moviesAPI.searchMovieByTitle(token, searchWord)
            .then(result => result.data);
        if (response.data.length > 0) {
            dispatch(setMovies(response.data, response.meta))
        } else {
            let response = await moviesAPI.searchMovieByActor(token, searchWord)
                .then(result => result.data);
            if (response.data.length > 0) {
                dispatch(setMovies(response.data, response.meta))
            } else if (response.data.length === 0) {
                dispatch(setMovies(response.data, response.meta))
            }
        }
    }

export const UploadMoviesThunkCreator = (file, token) =>
    async () => {
        await moviesAPI.uploadMovies(file, token)
            .then(result => result.data);
}

export const AddMovieThunkCreator = (value, token) =>
    async () => {
        const actorsAsStrings = value.actors.map((item) => {
            const actorAsArray = Object.values(item);
            return actorAsArray.join(' ')
        })
        await moviesAPI.addMovie(value.title, value.year, value.format, actorsAsStrings, token)
            .then(result => result.data);
    }

export default moviesReducer;