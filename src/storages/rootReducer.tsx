import { combineReducers } from "redux";
import { canvasReducer } from './canvasReducer';
import { menuReducer } from './menuReducer';
import { photoReducer } from '././reducers/photoReducer';

export const rootReducer = combineReducers({
    canvasReducer,
    menuReducer,
    photoReducer
});