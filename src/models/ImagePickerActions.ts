export type ImagePickerAction = PARSE | GET_NEXT;
export interface PARSE {
    type: "PARSE";
    query: string;
}
export interface GET_NEXT {
    type: "GET_NEXT";
    url: string;
    id: number;
}