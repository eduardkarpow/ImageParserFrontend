import {SERVER_URL} from "../../options";
import {nextActionCreator, trimActionCreator} from "../ImageTrimReducer";
import {AppDispatch, RootState} from "../index";
import {ThunkAction} from "redux-thunk";
import {AnyAction} from "redux";

export const getNextForTrim = ():ThunkAction<void, RootState, unknown, AnyAction> => {
    return async dispatch => {
        try {
            const next = await fetch(SERVER_URL+`/getNext`).then(res => res.json());
            if(next.status===400) return "BAD REQUEST";
            dispatch(nextActionCreator(next.body.id,next.body.url));
        } catch (e){
            console.log(e);
        }
    }
}

export const trim = (url:string, id:string,x:string, y:string, width:string, height:string):ThunkAction<void, RootState, unknown, AnyAction> => {
    return async dispatch => {
        try{
            await fetch(SERVER_URL+`/download?url=${url}&id=${id}`);
            await fetch(SERVER_URL+`/trim?id=${id}&x=${x}&y=${y}&width=${width}&height=${height}`);
            dispatch(trimActionCreator());
            await dispatch(getNextForTrim());
        } catch (e){
            console.log(e);
        }
    }

}