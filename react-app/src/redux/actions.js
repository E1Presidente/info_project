export const infoInput = text => {
    return {
        type: 'INFO_TEXT',
        text
    }
};

export const operationInput = text => {
    return {
        type: 'OPERATION_TEXT',
        text
    }
};

export const controlInput = text => {
    return {
        type: 'CONTROL_TEXT',
        text
    }
};

export const operationSelect = option => {
    return {
        type: 'OPERATION_SELECT',
        option
    }
}

export const controlSelect = option => {
    return {
        type: 'CONTROL_SELECT',
        option
    }
}

export const searchResult = result => {
    return {
        type: 'SET_RESULT',
        result
    }
}