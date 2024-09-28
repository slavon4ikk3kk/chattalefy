import { useState, useEffect } from 'react';
import s from "./HeroAnswer.module.css";
import images from "../../assets/index.js";
import Typewriter from 'typewriter-effect';
const HeroAnswer = () => {
    const [isShowMessage, setIsShowMessage] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            setIsShowMessage(true);
        }, 3000);
    }, []);
    return (
        <div className={s.heroAnswer}>
            <img src={images.pifagor} className={s.heroImg}></img>
            <div className={s.heroTextArea}>
                <p className={s.heroName}>Pifagor</p>
                {isShowMessage ? <p className={s.heroText}><Typewriter
                    options={{
                        strings: ['Lorem ipsum dolor sit, amet consectetur adipisicing.'],
                        autoStart: true,
                        loop: false,
                    }}
                /></p> : <span className={s.loader}></span>}

            </div>
        </div>
    )
}

export default HeroAnswer
