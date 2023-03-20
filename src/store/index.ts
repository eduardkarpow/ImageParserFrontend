import {createStore, combineReducers, applyMiddleware} from "redux";
import {ImagePickerReducer} from "./ImagePickerReducer";
import thunk from "redux-thunk";
import {ImageTrimReducer} from "./ImageTrimReducer";

const rootReducer = combineReducers({
    imagePicker: ImagePickerReducer,
    imageTrim: ImageTrimReducer
})
// @ts-ignore
export const store = createStore(rootReducer, applyMiddleware(thunk));
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;