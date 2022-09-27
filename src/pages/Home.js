import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {loadGames} from "../actions/gameActions";
import {AnimatePresence, AnimateSharedLayout, motion} from "framer-motion";
import styled from "styled-components"
import Game from "../components/Game";
import GameDetail from "../components/GameDetail";
import {useLocation} from "react-router";
import {fadeIn} from "../animations";

const Home = () => {
    const  dispatch = useDispatch();
    useEffect(()=>{
         dispatch(loadGames())
    },[dispatch]);

    const location = useLocation()
    const pathId = location.pathname.split("/")[2];

    //pull some data from the store
    const {popular, newGames, upcoming, searched}  = useSelector(state => state.games);

    return (
        <GamesList variants={fadeIn} initial="hidden" animate="show">
            <AnimateSharedLayout type="crossfade">
                <AnimatePresence>
                   {pathId &&  <GameDetail pathId={pathId}/>}
                </AnimatePresence>
                { searched.length>0 ? (
                    <div className="searched">
                        <h2>Searched Ga mes</h2>
                        <Games>
                            {searched.map(searched =>(
                                <Game key={searched.id}
                                      name={searched.name}
                                      released={searched.released}
                                      id={searched.id}
                                      image={searched.background_image}
                                />
                            ))}
                        </Games>
                    </div>
                ):""};


                <h2>Upcoming Games</h2>
                <Games>
                    {upcoming.map(upcomingGame =>(
                        <Game key={upcomingGame.id}
                              name={upcomingGame.name}
                              released={upcomingGame.released}
                              id={upcomingGame.id}
                              image={upcomingGame.background_image}
                        />
                    ))}
                </Games>
                <h2>Popular Games</h2>
                <Games>
                    {popular.map(popularGame =>(
                        <Game key={popularGame.id}
                              name={popularGame.name}
                              released={popularGame.released}
                              id={popularGame.id}
                              image={popularGame.background_image}
                        />
                    ))}
                </Games>
                <h2>New Games</h2>
                <Games>
                    {newGames.map(newGame =>(
                        <Game key={newGame.id}
                              name={newGame.name}
                              released={newGame.released}
                              id={newGame.id}
                              image={newGame.background_image}
                        />
                    ))}
                </Games>
            </AnimateSharedLayout>
        </GamesList>
    );
};
const GamesList = styled(motion.div)`
 padding: 0 5rem;
 h2{
    padding: 5rem 0;
 }
`

const Games = styled(motion.div)`
  min-height: 80vh;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  grid-column-gap: 3rem;
  grid-row-gap: 5rem;
`

export default Home;