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
    jack,
    quin,
    king,
    ace
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