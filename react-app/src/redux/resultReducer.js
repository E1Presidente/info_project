const initialState = {
    result: ''
};

export const resultReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'SET_RESULT':
            return {
                ...state,
                result: action.result
            }
        default:
            return state;
    } 
};