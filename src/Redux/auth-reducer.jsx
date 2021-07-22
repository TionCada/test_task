import {authAPI} from "../API/API";

const SET_SESSION_DATA = 'test_task/auth/SET_SESSION_DATA';
const REMOVE_SESSION_DATA = 'test_task/auth/REMOVE_SESSION_DATA';

let initialState = {
    token: null,
    isAuthorized: false
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_SESSION_DATA:
            return {
                ...state,
                token: action.data.token,
                isAuthorized: true
            }
        case REMOVE_SESSION_DATA:
            return {
                ...state,
                token: null,
                isAuthorized: false
            }
        default:
            return state;
    }
}

export const setSessionData = (token) => ({
    type: SET_SESSION_DATA,
    data: {token}
});

export const removeSessionData = () => ({
    type: REMOVE_SESSION_DATA
});

export const LoginThunkCreator = (values) =>
    async (dispatch) => {
        let data = await authAPI.login(values)
            .then(result => result.data);
        if (data.status === 1) {
            dispatch(setSessionData(data.token));
            return 1;
        } else {
            return 0;
        }
    }

export const RegisterThunkCreator = (values) =>
    async () => {
        let data = await authAPI.register(values)
            .then(result => result.data);
        if (data.status === 1) {
            return 1;
        } else {
            return 0;
        }
    }

export default authReducer;