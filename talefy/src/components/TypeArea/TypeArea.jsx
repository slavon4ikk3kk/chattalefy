import React, {useState} from 'react'
import s from "./TypeArea.module.css";
import images from "../../assets/index.js"
const TypeArea = () => {
    const [inputValue, setInputValue] = useState();

    function HandleInput(e){
          setInputValue(e.target.value)
    }
  return (
    <form className={s.form}>
      <input onChange={HandleInput} value={inputValue} type='text' placeholder='Type your message here' className={s.input}></input>
      <button type='submit' className={s.button}>
        <img src={images.arrowTop} className={s.arrow}></img>
      </button>
    </form>
  )
}

export default TypeArea;
