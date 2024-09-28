import React from 'react';
import s from "./ChatSpace.module.css";
import images from "../../assets/index.js";
import HeroAnswer from '../HeroAnswer/HeroAnswer.jsx';
const ChatSpace = ({ messages }) => {

  console.log(messages);
  return (
    <div>
      <ul>
        <li>
          <div className={s.heroAnswer}>
            <img src={images.pifagor} className={s.heroImg}></img>
            <div className={s.heroTextArea}>
              <p className={s.heroName}>Pifagor</p>
              <p className={s.heroText}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam ex architecto velit saepe ullam? Ea obcaecati illum magnam asperiores quia?</p>
            </div>
          </div>
        </li>
        {messages.map((message) =>{
          return(
          <li>
          <div className={s.userAnswer}>
          <div className={s.userTextArea}>
               <p className={s.userName}>me</p>
              <p className={s.userMessage}>{message}</p>
          </div>
        </div>
        <HeroAnswer></HeroAnswer>
        </li>
          )
        })}
      </ul>
    </div>
  )
}

export default ChatSpace
