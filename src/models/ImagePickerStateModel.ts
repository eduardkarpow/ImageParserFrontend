import {ImagePickerReducer} from "../store/ImagePickerReducer";

export interface store{
    imagePicker: typeof ImagePickerReducer;
}
export interface ImagePickerStateModel{
    currentQuery: string;
    currentURL: string;
    currentId: number;
}
export interface imageElement {
    url: string;
    name: string;
    id: number;
}