import * as AT from '../actions/actionTypes'

const initialState = {
    number: 1
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case AT.INCREMENT: return { ...state, number: state.number + 1 }
        case AT.DECREMENT: return { ...state, number: state.number - 1 }
        default: return state;
    }
}

export default reducer