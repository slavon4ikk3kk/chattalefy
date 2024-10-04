import React from 'react';
import s from "./Header.module.css";
import images from "../../assets/index.js";
import Tooltip from "@mui/material/Tooltip"
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
       <Tooltip title="Info">
       <img src={images.info} className={s.info}></img>
       </Tooltip>
      </div>
    </div>
  )
}

export default Header
