import React from "react"
import "./Card.css"
interface CardProps {
    suit: string;
    rank: string;
}

function Card(props: CardProps) {

    const imageUrl = new URL(`../../assets/cards/${props.suit}/${props.rank}.png`, import.meta.url).href;
    return (
        <img className="Card" src={imageUrl} alt="dfsadf"/>
    )
}

export default Card