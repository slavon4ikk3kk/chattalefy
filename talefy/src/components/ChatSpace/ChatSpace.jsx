import React from 'react';
import s from "./ChatSpace.module.css";
import images from "../../assets/index.js";
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
          <div className={s.userAnswer}>
            <div className={s.userTextArea}>
                 <p className={s.userName}>me</p>
                <p className={s.userMessage}>hello</p>
            </div>
            <ul>
              {messages.map((message) =>
                <ListItem value={message}
                ><p>{message}</p></ListItem>)}
            </ul>
          </div>
        </li>
      </ul>
    </div>
  )
}

export default ChatSpace
