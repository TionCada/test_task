import axios from "axios";

export const authAPI = {
    register(values) {
        return axios({
            method: 'post',
            url: 'http://localhost:8000/api/v1/users',
            data: {
                "email": `${values.email}`,
                "name": `${values.name}`,
                "password": `${values.password}`,
                "confirmPassword": `${values.confirmPassword}`
            }
        })
    },
    login(values) {
        return axios({
            method: 'post',
            url: 'http://localhost:8000/api/v1/sessions',
            data: {
                "email": `${values.email}`,
                "password": `${values.password}`,
            }
        })
    }
}

export const moviesAPI = {
    getMovies(token) {
        return axios({
            method: 'get',
            url: 'http://localhost:8000/api/v1/movies',
            headers: {
                "Authorization": `${token}`
            }
        })
    },
    searchMovieByTitle(token, title) {
        console.log(title)
        return axios({
            method: 'get',
            url: 'http://localhost:8000/api/v1/movies?title=' + `${title}`,
            headers: {
                "Authorization": `${token}`
            }
        })
    },
    searchMovieByActor(token, actor) {
        return axios({
            method: 'get',
            url: 'http://localhost:8000/api/v1/movies?actor=' + `${actor}`,
            headers: {
                "Authorization": `${token}`
            }
        })
    },
    addMovie(title, year, format, actors, token) {
        return axios({
            method: 'post',
            url: 'http://localhost:8000/api/v1/movies',
            headers: {
                "Authorization": `${token}`
            },
            data: {
                "title": `${title}`,
                "year": year,
                "format": `${format}`,
                "actors": actors
            }
        })
    },
    getDetailedInfo(id, token) {
        return axios({
            method: 'get',
            url: 'http://localhost:8000/api/v1/movies/' + `${id}`,
            headers: {
                "Authorization": `${token}`
            }
        })
    },
    deleteMovie(id, token) {
        return axios({
            method: 'delete',
            url: 'http://localhost:8000/api/v1/movies/' + `${id}`,
            headers: {
                "Authorization": `${token}`
            }
        })
    },
    uploadMovies(file, token) {
        return axios({
            method: 'post',
            url: 'http://localhost:8000/api/v1/movies/import',
            headers: {
                "Authorization": `${token}`
            },
            body: file,
        })
    }
}

