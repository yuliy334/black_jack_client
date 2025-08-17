import React, { useEffect, useState } from "react"
import "./Deck.css"
import pick from '../../assets/cards/back.png';
import Card from "../Card/Card";
import type { GameState } from "../../types/types";

interface DeckCardsProps {
    gameState: GameState | null;
}

function Deck(props: DeckCardsProps) {
    const [numCard, setNumCard] = useState(0)
    useEffect(() => {
        setNumCard(
            54 - (props.gameState?.playerCards.length ?? 0) - (props.gameState?.dilerCards.length ?? 0)
        );
    }, [props.gameState]);
    return (
        <div className="Deck">
            <div className="num_of_cards">{numCard}</div>
            <Card suit="0" rank="0"></Card>
        </div>

    )
}

export default Deck