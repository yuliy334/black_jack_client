import React from "react"
import "./Deck.css"
import pick from '../../assets/cards/back.png';
import Card from "../Card/Card";

function Deck() {
    const num: number = 0;
    return (
        <div className="Deck">
            <div className="num_of_cards">{num}</div>
            <Card suit="0" rank="0"></Card>
        </div>

    )
}

export default Deck