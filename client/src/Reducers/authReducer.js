import * as types from '../Actions/action-types';
import AuthService from '../Utility/Auth';

const authReducerInitState = {
    isAuthenticated: !AuthService.isTokenExpired(),
    isFetching: false,
    profile: AuthService.getProfile(),
    error: null,
};

export const authReducer = (state = authReducerInitState, action) => {
    switch (action.type) {

        case types.LOGIN_REQUEST:
            return {
                ...state,
                isFetching: true,
                error: null,
            };
        case types.LOGIN_SUCCESS:
            return {
                ...state,
                isFetching: false,
                isAuthenticated: true,
                profile: action.profile,
            };
        case types.LOGIN_ERROR:
            return {
                ...state,
                isFetching: false,
                isAuthenticated: false,
                profile: {},
                error: action.error,
            };
        case types.LOGOUT_SUCCESS:
            return {
                ...state,
                isAuthenticated: false,
                profile: {},
            };
        default:
            return state;
    }
};