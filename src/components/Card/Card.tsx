import React from "react"
import "./Card.css"
import dec from '../../assets/cards/back.png'
type CardProps = {
    rank: string;
    suit: string;
    inversed:boolean;
    className?:string;
};


function Card(props: CardProps) {
    let imageUrl = dec;
    if (props.rank !== "0" && !props.inversed) {
        imageUrl = new URL(`../../assets/cards/${props.suit}/${props.rank}.png`, import.meta.url).href;
    }

    const CardClasses = `Card ${props.rank === "0" || props.inversed ? "inversed" : ""}`;

    return (
        <div className={`Card ${props.className ?? ""}`} style={{backgroundImage:`url(${imageUrl})`}}/>
    )
}

export default Card