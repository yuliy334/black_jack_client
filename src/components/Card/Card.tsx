import React from "react"
import "./Card.css"
import dec from '../../assets/cards/back.png'
type CardProps = {
    key?: number;
    rank: string;
    suit: string;
    inversed: boolean;
    className?: string;
    isFirstDiller?: string;
};


function Card(props: CardProps) {
    let imageUrl = dec;
    let classes: string = "";
    if (props.rank !== "0" && !props.inversed) {
        imageUrl = new URL(`../../assets/cards/${props.suit}/${props.rank}.png`, import.meta.url).href;

        if (props.isFirstDiller == "isFirstDiller") {
            classes = " not-inversed";
        }
    }



    return (
        <div className={`Card ${props.className ?? ""} ${classes}`} style={{ backgroundImage: `url(${imageUrl})` }} />
    )
}

export default Card