import {SERVER_URL} from "../../options";
import {getNextActionCreator, parseActionCreator} from "../ImagePickerReducer";
import {AppDispatch, RootState} from "../index";
import {ThunkAction} from "redux-thunk";
import {AnyAction} from "redux";

export const parseImages = (query:string):ThunkAction<void, RootState, unknown, AnyAction> => {
    return async dispatch => {
        try {
            const res = await fetch(SERVER_URL+"/parse?query="+query);
            if(res.status === 400) return "BAD REQUEST";
            dispatch(parseActionCreator(query))
            const next = await dispatch(getNext(query));
            if(res.status === 400) return "BAD REQUEST";
        } catch (e:any){
            console.log(e);
        }
    }

}
export const getNext = (query:string):ThunkAction<void, RootState, unknown, AnyAction> => {
    return async dispatch => {
        try{
            const next = await fetch(SERVER_URL+"/getOne?query="+query).then(res => res.json());
            if(next.status === 400) return "BAD REQUEST";
            dispatch(getNextActionCreator(next.body.url,next.body.id));
        } catch (e){
            console.log(e);
        }
    }

}
export const rejectImage = (id:number, query:string):ThunkAction<void, RootState, unknown, AnyAction> => {
    return async dispatch => {
        try {
            const res = await fetch(SERVER_URL+"/reject?id="+String(id));
            if(res.status===400) return "BAD REQUEST";
            await dispatch(getNext(query));
        } catch (e){
            console.log(e);
        }
    }
}
export const acceptImage = (id:number, query:string):ThunkAction<void, RootState, unknown, AnyAction> => {
    return async dispatch => {
        try {
            const res = await fetch(SERVER_URL+"/accept?id="+String(id));
            if(res.status===400) return "BAD REQUEST";
            await dispatch(getNext(query));
        } catch (e){
            console.log(e);
        }
    }

}
