import React from "react"

interface CardProps {
  suit: string;
  rank: string;
}

function Card(props: CardProps) {

    
    return (
        <>
            <h3>Card:</h3>
            <div>rank: {props.rank}</div>
            <div>suit: {props.suit}</div>
        </>
    )
}

export default Card