export type ImageTrimActions = NEXT | TRIM;
export interface NEXT {
    type: "NEXT";
    id: number;
    url: string;
}
export interface TRIM {
    type: "TRIM";
}