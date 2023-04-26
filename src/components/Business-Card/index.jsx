import React from "react";
import style from "./Business-card.module.css"
import linkedin from'../../assets/linkedin.svg'
import gitHub from '../../assets/github.svg'
import instagram from'../../assets/instagram.svg'
import henrique from'../../assets/henrique.jpg'
const Bcard = () => {

    return(
        <div className={style.wrapper}>
            <div className={style.foto}>
                <img src={henrique} alt="none"/>
            </div>
            <div className={style.content}>
                <div className={style.links}>
                    <img src={linkedin} alt="none" />
                    <img src={gitHub} alt="Github" />
                    <img src={instagram} alt="Instagram" />    
                </div>
                
            </div>
        </div>
    );


}


export default Bcard;