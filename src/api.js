const base_url = "https://api.rawg.io/api/";


//Getting dates
const getCurrentMonth = ()=>{
    let month = new Date().getMonth() + 1;
    if (month<10){
        return `0${month}`;
    }else{
        return month;
    }
};

const getCurrentDay = ()=>{
    let day = new Date().getDate();
    if (day<10){
        return `0${day}`;
    }else{
        return day;
    }
};

const apiKey="e60b9d87e3b2454ba325b8fb7b6fbe0a";//process.env.REACT_APP_RAWG_API;
const currentYear = new Date().getFullYear();
const currentMonth = getCurrentMonth();
const currentDay = getCurrentDay();
const currentDate = `${currentYear}-${currentMonth}-${currentDay}`
const lastYear = `${currentYear-1}-${currentMonth}-${currentDay}`
const nextYear = `${currentYear+1}-${currentMonth}-${currentDay}`
//popular games
const popular_games  = `games?key=${apiKey}&dates=${lastYear},${currentDate}&ordering=-rating&page_size=10`;
const upcoming_games=`games?key=${apiKey}&dates=${currentDate},${nextYear}&ordering=-added&page_size=10`;
const new_games=`games?key=${apiKey}&dates=${lastYear},${currentDate}&ordering=-released&page_size=10`;




export const popularGamesUrl = () => `${base_url}${popular_games}`
export const upcomingGamesUrl = ()=>`${base_url}${upcoming_games}`
export const newGamesUrl = ()=>`${base_url}${new_games}`
export const gameDetailsUrl=(game_id)=>`${base_url}games/${game_id}?key=${apiKey}`
export const gameScreenshotsUrl=(game_id)=>`${base_url}games/${game_id}/screenshots?key=${apiKey}`
export const searchGameUrl=(game_name)=>`${base_url}games?search=${game_name}&key=${apiKey}&page_size=9`