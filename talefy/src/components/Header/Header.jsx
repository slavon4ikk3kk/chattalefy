import React from 'react';
import s from "./Header.module.css";
import images from "../../assets/index.js";
const Header = () => {

  return (
    <div className={s.header}>
    <div className={s.firstWrap}>
      <p className={s.mainText}>Chat with character</p>
      <img src={images.close}></img>
      </div>
      <div className={s.secondWrap}>
        <div className={s.thirdWrap}>
       <img src={images.pifagor} className={s.pifagor}></img>
       <p className={s.name}>PIFAGOR</p>
       </div>
       <img src={images.info}></img>
      </div>
      <div className={s.messages}>
           <p>some text</p>
      </div>
      <div className={s.answers}>
        <p>some answer</p>
      </div>
    </div>
  )
}

export default Header
