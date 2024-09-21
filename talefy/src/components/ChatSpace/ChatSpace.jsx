import React from 'react';
import s from "./ChatSpace.module.css";
import images from "../../assets/index.js";
const ChatSpace = () => {
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
      </ul>
    </div>
  )
}

export default ChatSpace
