import {ImagePickerStateModel} from "../models/ImagePickerStateModel";
import {ImagePickerAction, PARSE, GET_NEXT} from "../models/ImagePickerActions";

const initialState: ImagePickerStateModel = {
    currentQuery: "",
    currentURL: "https://img.freepik.com/premium-vector/update-concept-application-loading-process-symbol-web-screen-vector-illustration-flat_186332-1253.jpg?w=2000",
    currentId: 1
}

export const ImagePickerReducer = (state:ImagePickerStateModel = initialState, action:ImagePickerAction):ImagePickerStateModel => {
    switch (action.type){
        case "PARSE":
            return {...state, currentQuery:action.query};
        case "GET_NEXT":
            return {...state, currentURL: action.url, currentId: action.id};
        default:
            return state;
    }
}
export const getNextActionCreator = (url:string, id:number):GET_NEXT => {return {type:"GET_NEXT", url, id}; };
export const parseActionCreator = (query:string):PARSE => {return {type: "PARSE",query}};