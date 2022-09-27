import React from 'react';
import {motion} from "framer-motion";
import styled from "styled-components";
import {useDispatch} from "react-redux";
import {loadDetail} from "../actions/detailAction";
import {Link} from "react-router-dom";
import {smallImage} from "../utils";
import {popup} from "../animations";

const Game = ({id, name, released, image}) => {

    const stringPathId = id.toString()
    const dispatch = useDispatch();
    const loadDetailHandler = () => {
        document.body.style.overflow='hidden';
        dispatch(loadDetail(id))
    }
    //console.log(image)
    //console.log(smallImage(image, 640))
    return (
        <StyledGame variants={popup} initial="hidden" animate="show" layoutId={stringPathId} onClick={loadDetailHandler}>
            <Link to={`/game/${id}`}>
            <motion.h3 layoutId={`h3 ${stringPathId}`}>{name}</motion.h3>
            <p>{released}</p>
            <motion.img layoutId={`image ${stringPathId}`} src={smallImage(image, 640)} alt={name}/>
            </Link>
        </StyledGame>
    );
};

const StyledGame = styled(motion.div)`
  min-height: 30vh;
  box-shadow: 0 5px 20px rgba(0,0,0,0.2);
  text-align: center;
  border-radius: 1rem;
  overflow: hidden;
  cursor: pointer;
  img{
    width: 100%;
    height: 40vh;
    object-fit: cover;
  }
`

export default Game;