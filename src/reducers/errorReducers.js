import { SHOW_ERRORS } from '../actions/types';

export default function (state = {}, action) {
    switch (action.type){
        case SHOW_ERRORS:
            return action.payload;
        default:
            return state
    }
}