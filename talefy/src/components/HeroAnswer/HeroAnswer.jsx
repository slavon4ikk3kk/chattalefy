import {useState, useEffect} from 'react';
import s from "./HeroAnswer.module.css";
import images from "../../assets/index.js"
const HeroAnswer = () => {
  return (
    <div className={s.heroAnswer}>
    <img src={images.pifagor} className={s.heroImg}></img>
    <div className={s.heroTextArea}>
      <p className={s.heroName}>Pifagor</p>
      <p className={s.heroText}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam ex architecto velit saepe ullam? Ea obcaecati illum magnam asperiores quia?</p>
      <span className={s.loader}></span>
    </div>
  </div>
  )
}

export default HeroAnswer
