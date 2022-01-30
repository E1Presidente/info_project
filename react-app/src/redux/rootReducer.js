import {combineReducers} from 'redux';
import {inputReducer} from './inputReducer';
import {selectReducer} from './selectReducer';
import {resultReducer} from './resultReducer';

export const rootReducer = combineReducers({
    inputReducer, 
    selectReducer,
    resultReducer
});