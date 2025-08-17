import React from "react"
import "./Card.css"
import dec from '../../assets/cards/back.png'
interface CardProps {
    suit: string;
    rank: string;
}

function Card(props: CardProps) {
    let imageUrl:string = dec;
    if (props.suit != "0") {
        imageUrl = new URL(`../../assets/cards/${props.suit}/${props.rank}.png`, import.meta.url).href;
    }
    return (
        <img className="Card" src={imageUrl} alt="dfsadf" />
    )
}

export default Card