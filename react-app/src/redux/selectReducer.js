const initialState = {
    operationSelect: [
        'Hardware',
        '1C'
    ],
    operationSelected: 'Hardware',
    controlSelect: [
        'Share',
        'Access'
    ],
    controlSelected: 'Share'
};

export const selectReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'OPERATION_SELECT':
            return {
                ...state,
                operationSelected: action.option
            }
        case 'CONTROL_SELECT':
            return {
                ...state,
                controlSelected: action.option
            }
        default:
            return state;
    } 
};