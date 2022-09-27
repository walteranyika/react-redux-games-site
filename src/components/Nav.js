import React, {useState} from 'react';
import {motion} from "framer-motion";
import styled from "styled-components";
import logo from "../img/logo.svg";
import {useDispatch} from "react-redux";
import {clearSearch, fetchSearch} from "../actions/gameActions";
import {fadeIn} from "../animations";

const Nav = () => {
    const dispatch = useDispatch();
    const [text, setText] = useState("");

    const inputHandler=(e)=> {
      setText(e.target.value)
    };

    const submitHandler =(e)=>{
        e.preventDefault();
        dispatch(fetchSearch(text));
        setText("")
    };

    const handleClearSearch =()=>{
        dispatch(clearSearch())
    }

    return (
        <StyledNav variants={fadeIn} initial="hidden" animate="show">
            <Logo onClick={handleClearSearch}>
            <img src={logo} alt="logo"/>
            <h1>Gala</h1>
            </Logo>
            <form className="search">
                <input value={text} type="text" onChange={inputHandler}/>
                <button type="submit" onClick={submitHandler}>Search</button>
            </form>
        </StyledNav>
    );
};

const StyledNav = styled(motion.nav)`
  padding: 3rem 5rem;
  text-align: center;
  input{
       width:30%;
       font-size: 1.5rem;
       padding: 0.5rem;
       border: none;
       margin-top: 1rem;
       box-shadow: 0px 0px 30px rgba(0,0,0,0.2) ;
  }
  button{
      font-size: 1.5rem;
      border: none;
      padding: 0.5rem 2rem;
      cursor: pointer;
      background: #ff7676;
      color: white;
  }
`

const Logo = styled(motion.div)`
  display: flex;
  justify-content: center;
  padding: 1rem;
  cursor: pointer;
  img{
    height: 2rem;
    width: 2rem;
  }
`

export default Nav;