import axios from "axios";
import {newGamesUrl, popularGamesUrl, searchGameUrl, upcomingGamesUrl} from "../api";

export const loadGames = () => async (dispatch) => {
    const popularData = await axios.get(popularGamesUrl());
    const upcomingData = await axios.get(upcomingGamesUrl());
    const newGamesData = await axios.get(newGamesUrl());
    dispatch({
        type:"FETCH_GAMES",
        payload: {
            popular: popularData.data.results,
            upcoming: upcomingData.data.results,
            newGames: newGamesData.data.results,
        },
    });
};


export const fetchSearch =(text)=> async (dispatch)=>{
    const searchedData =  await  axios.get(searchGameUrl(text));
    dispatch(
        {
            type: "FETCH_SEARCHED",
            payload:{
                searched: searchedData.data.results
            }
        }
    )
}

export const clearSearch = ()=>async (dispatch)=>{
    dispatch({
        type:"CLEAR_SEARCH"
    });
}
