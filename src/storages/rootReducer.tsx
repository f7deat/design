import { combineReducers } from "redux";
import { canvasReducer } from './canvasReducer';
import { menuReducer } from './menuReducer';
import { photoReducer } from '././reducers/photoReducer';
import { pageReducer } from '././reducers/pageReducer';

export const rootReducer = combineReducers({
    canvasReducer,
    menuReducer,
    photoReducer,
    pageReducer
});