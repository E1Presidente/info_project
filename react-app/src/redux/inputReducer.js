const initialState = {
    infoInput: '',
    operationInput: '',
    controlInput: ''
};

export const inputReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'INFO_TEXT':
            return {
                ...state,
                infoInput: action.text
            }
        case 'OPERATION_TEXT':
            return {
                ...state,
                operationInput: action.text
            }
        case 'CONTROL_TEXT':
            return {
                ...state,
                controlInput: action.text
            }
        default:
            return state;
    } 
};