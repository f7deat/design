import { combineReducers } from "redux";
import { canvasReducer } from './canvasReducer';
import { menuReducer } from './menuReducer';

export const rootReducer = combineReducers({
    canvasReducer,
    menuReducer
});