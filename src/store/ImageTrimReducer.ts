import {ImageTrimStateModel} from "../models/ImageTrimStateModel";
import {ImageTrimActions, TRIM, NEXT} from "../models/ImageTrimActions";

const initialState:ImageTrimStateModel = {
    currentURL: "",
    currentId: 1
}
export const ImageTrimReducer = (state:ImageTrimStateModel = initialState, action:ImageTrimActions):ImageTrimStateModel => {
    switch (action.type){
        case "TRIM":
            return state;
        case "NEXT":
            return {...state, currentId:action.id, currentURL:action.url};
        default:
            return state;
    }
}

export const trimActionCreator = ():TRIM => {return {type: "TRIM"}};
export const nextActionCreator = (id:number, url:string):NEXT => {return {type: "NEXT", id, url}};