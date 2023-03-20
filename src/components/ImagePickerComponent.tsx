import React, {useState} from "react";
import styles from "./css_modules/ImagePicker.module.css";
import {ThunkDispatch} from "redux-thunk";
import {acceptImage,rejectImage,getNext,parseImages} from "../store/actions/ImagePickerActions";
import {getNextForTrim} from "../store/actions/ImageTrimActions";
import {useAppDispatch, useAppSelector} from "../hooks/reduxHooks";
import {RootState} from "../store";


const ImagePickerComponent = () => {
    const [search ,setSearch] = useState("");
    const dispatch:ThunkDispatch<RootState, unknown, any> = useAppDispatch();
    const currentId = useAppSelector((state:any) => state.imagePicker.currentId);
    const currentURL = useAppSelector((state:any) => state.imagePicker.currentURL);
    const currentSearch = useAppSelector((state:any) => state.imagePicker.currentQuery);



    const searchImages = ():void => {
        dispatch(parseImages(search));
        setSearch("");
    }
    const reject = ():void => {
        dispatch(rejectImage(currentId,currentSearch));

    }
    const accept = ():void => {
        dispatch(acceptImage(currentId,currentSearch));
    }

    return (
        <div className={styles.wrap}>
            <div className={styles.buttons}>
                <button className = {styles.red} onClick={reject}>Хуйня</button>
                <button className={styles.green} onClick={accept}>Круто</button>
            </div>
            <div className={styles.image}><img  src={currentURL} alt=""/></div>
            <div className={styles.search}>
                <input
                    value = {search}
                    type="text"
                    placeholder="type your target"
                    onChange={e => setSearch(e.target.value)}
                />
                <button onClick={()=> searchImages()}>search</button>
            </div>
        </div>
    )
}

export default ImagePickerComponent;