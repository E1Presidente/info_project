const initialState = null;

export const formReducer = (state = initialState, action) => {
    console.log(state);
    switch(action.type) {
        case 'INPUT_TEXT':
            return state = action.text
        default:
            return state;
    } 
};