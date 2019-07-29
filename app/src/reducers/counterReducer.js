//export const INCREMENT = 'INCREMENT';
//export const DECREMENT = 'DECREMENT';

import {INCREMENT, DECREMENT} from '../actions/actionsCounter';

const intitialState = {
    countVal: 10
};

const counterReducer = (state = intitialState, action) => {
    switch(action.type){
        case INCREMENT:
            return {
                ...state,
                countVal: state.countVal + 1
            };

        case DECREMENT:
            return {
                ...state,
                countVal: state.countVal - 1
            };

        default:
            return state;    

    }
}

export default counterReducer;