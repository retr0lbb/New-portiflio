import style from './card.module.css'



const Card = () =>{
    return(
        <section>
            <div className={style.container}>
                <p>Hello.<br/> I'm Henrique, the<br/> <strong>Web Developer</strong></p>
            </div>
            <div>
                <button>Aqui é o botão</button>
            </div>
        </section>
    )
}

export default Card;