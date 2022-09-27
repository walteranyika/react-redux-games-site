import {gameDetailsUrl, gameScreenshotsUrl} from "../api";
import axios from "axios";


export const loadDetail = (id) => async (dispatch) => {
    dispatch({
        type:"LOADING_DETAIL",
    })
    const url = gameDetailsUrl(id);
    const detailData = await axios.get(url)
    const screenData = await  axios.get(gameScreenshotsUrl(id))
    dispatch({
        type:"GET_DETAIL",
        payload:{
            game: detailData.data,
            screen : screenData.data,
        }
    })
}