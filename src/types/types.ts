enum CardValue {

    two = 2,
    three,
    four,
    five,
    six,
    seven,
    eight,
    nine,
    ten,
    jack="jack",
    quin="queen",
    king="king",
    ace="ace"
}

enum Suit {
    '♠',
    '♥',
    '♦',
    '♣'
}


interface Сard {
    rank: CardValue,
    suit: Suit
}

interface GameState {
    gameCards: Сard[];
    playerCards: Сard[];
    playerPoints: {value: number};
    dilerCards: Сard[];
    dilerPoints: {value: number};
    gameResult: string;
}

export type { GameState, CardValue,Suit,Сard };