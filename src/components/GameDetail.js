import React from 'react';

import {motion} from "framer-motion";
import styled from "styled-components";
import {useSelector} from "react-redux";
import {useNavigate} from "react-router";
import {smallImage} from "../utils";
import apple from "../img/apple.svg"
import gamepad from "../img/gamepad.svg"
import nintendo from "../img/nintendo.svg"
import playstation from "../img/playstation.svg"
import steam from "../img/steam.svg"
import xbox from "../img/xbox.svg"
import ReactStars from "react-rating-stars-component";

const GameDetail = ({pathId}) => {
    const navigate = useNavigate();

    const getPlatform =(platform)=>{
        switch (platform){
            case "PlayStation 5":
            case "PlayStation 4":
                return playstation
            case "Xbox One":
                return xbox
            case "PC":
                return steam
            case "Nintendo Switch":
                return nintendo
            case "iOS":
                return  apple
            default:
                return gamepad
        }
    }

    const exitDetailHandler = (e)=>{
        const el = e.target
        if (el.classList.contains("shadow")){
            document.body.style.overflow ="auto";
            navigate("/");
        }
    }
    const {screen, game, isLoading} = useSelector(state=>state.detail)
    return (
        <>
            {!isLoading && ( <CardShadow  className="shadow" onClick={exitDetailHandler}>
                <Detail layoutId={pathId}>
                    <Stats>
                        <div className="rating">
                            <motion.h3 layoutId={`h3 ${pathId}`}>{game.name}</motion.h3>
                            <p>{game.rating}</p>
                            <ReactStars
                                edit={false}
                                count={5}
                                value={game.rating}
                                size={24}
                                activeColor="#ffd700"
                            />
                        </div>
                        <Info>
                            <h3>Platforms</h3>
                            <Platforms>
                                {game.platforms.map(platform=>(
                                    <img key={platform.platform.id} src={getPlatform(platform.platform.name)} alt={platform.platform.name}/>
                                ))}
                            </Platforms>
                        </Info>
                    </Stats>
                    <Media>
                        <motion.img layoutId={`image ${pathId}`} src={smallImage(game.background_image, 1280)} alt=""/>
                    </Media>
                    <Description>
                        <p>{game.description_raw}</p>
                    </Description >
                    <div className="gallery">
                        {screen.results.map(screenShot=>(
                            <img key={screenShot.id} src={smallImage(screenShot.image,1280)} alt=""/>
                        ))}
                    </div>
                </Detail>
            </CardShadow>)}
        </>
    );
};

const CardShadow = styled(motion.div)`
  width: 100%;
  min-height: 100vh;
  overflow-y: scroll;
  background: rgba(0,0,0,0.5);
  position: fixed;
  top: 0;
  left: 0;
  &::-webkit-scrollbar{
    width: 0.5rem;
  }
  &::-webkit-scrollbar-thumb{
    background-color: #ff7676;
  }
    &::-webkit-scrollbar-track{
    background: white;
  }
`
const Detail = styled(motion.div)`
  width: 80%;
  border-radius: 1rem;
  padding: 2rem 5rem;
  background: white;
  position: absolute;
  left: 10%;
  color: black;
  img{
    width: 100%;
    margin-bottom: 0.5rem;
  }
`

const Stats = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: space-between;
`


const Info = styled(motion.div)`
  text-align: center;
`

const Platforms = styled(motion.div)`
    display: flex;
    justify-content: space-evenly;
    img{
       margin-left: 3rem;
    }
`

const Media = styled(motion.div)`
    margin-top: 5rem;
    img{
         width: 100%;
         height: 60vh;
         object-fit: cover;
    }
`

const Description = styled(motion.div)`
    margin: 5rem 0;
`
export default GameDetail;