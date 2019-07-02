import { SET_CURRENT_USER, IS_LOADING } from '../actions/types';
import IsEmpty from 'is-empty';

const initialState = {
    isAuth: false,
    user: {},
    isLoading: false
};

export default function (state = initialState, action) {
    switch (action.type){
        case SET_CURRENT_USER:
            return {
                ...state,
                isAuth: !IsEmpty(action.payload),
                user: action.payload
            };
        case IS_LOADING:
            return {
                ...state,
                isLoading: true
            };
        default:
            return state;
    }
}

