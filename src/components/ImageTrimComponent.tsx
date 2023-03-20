import React, {createRef, useState} from "react";
import styles from "./css_modules/ImageTrim.module.css";
import {getNextForTrim, trim} from "../store/actions/ImageTrimActions";
import {ThunkDispatch} from "redux-thunk";
import {RootState} from "../store";
import {useAppDispatch, useAppSelector} from "../hooks/reduxHooks";


const ImageTrimComponent = () => {
    const [width, setWidth] = useState("0");
    const [height, setHeight] = useState("0");
    const [x, setX] = useState("0");
    const [y, setY] = useState("0");


    const windowRef = createRef<HTMLDivElement>();
    const imageRef = createRef<HTMLDivElement>();

    const dispatch:ThunkDispatch<RootState, unknown, any> = useAppDispatch();
    const url = useAppSelector((state:any) => state.imageTrim.currentURL)
    const id = useAppSelector((state:any) => state.imageTrim.currentId)

    if(!url){
        // @ts-ignore
        dispatch(getNextForTrim())
    }
    const moveWindow = (e:any) => {
        console.log(1);
        setX((Number(e.clientX)-Number(imageRef.current?.offsetLeft)).toString()); //document.body.scrollLeft + document.documentElement.scrollLeft);
        setY(e.clientY);// + document.body.scrollTop + document.documentElement.scrollTop);

    }
    const trimImage = () => {
        dispatch(trim(url,id,x,y,width,height));
    }
    window.onclick = moveWindow;

    return (
        <div className={styles.trimWrap}>
            <div className={styles.sizePickWrapper}>
                <div className={styles.sizePickWrap}>
                    <h3>pick size!</h3>
                    <div className={styles.sizePick}>
                        <div className={styles.sizePickItem}>
                            <input
                                className={styles.size}
                                value={width}
                                onChange={e => setWidth(e.target.value)}
                            />
                        </div>
                        <h2> x </h2>
                        <div className={styles.sizePickItem}>
                            <input
                                className={styles.size}
                                value={height}
                                onChange={e => setHeight(e.target.value)}
                            />
                        </div>
                    </div>
                    <button className={styles.apply} onClick={trimImage}>apply</button>
                </div>
            </div>
            <div ref = {imageRef as React.RefObject<HTMLDivElement>} className={styles.image} onClick={moveWindow}>
                <div ref = {windowRef as React.RefObject<HTMLDivElement>} className={styles.window} style={{width:width+"px", height:height+"px", top: y+"px", left: x+"px"}}></div>
                <img alt = "" src={url}

                />
            </div>
        </div>
    )
}
export default ImageTrimComponent;