import { useEffect, useState } from 'react'
import SingleCard from './components/singleCard';
import './App.css';

const cardImages = [
  { "src": "/img/idi-amin.jpg", matched: false },
  { "src": "/img/kim_jong_il_portrait-2.jpg", matched: false },
  { "src": "/img/peron.jpg", matched: false },
  { "src": "/img/qaddafi.jpg", matched: false  },
  { "src": "/img/stalin.jpg", matched: false },
  { "src": "/img/trujillo.jpg", matched: false  }
]



function App() {
  const [cards, setCards] = useState([])
  const [turns, setTurns] = useState(0)
  const [cardChoiceOne, setCardChoiceOne] = useState(null)
  const [cardChoiceTwo, setCardChoiceTwo] = useState(null)
  const [disabled, setDisabled] = useState(false)

// shuffle cards
  const shuffleCards = () => {
    const shuffledCards = [...cardImages, ...cardImages]
      .sort(() => Math.random() - 0.5)
      .map((card) => ({ ...card, id: Math.random() }))

    setCardChoiceOne(null)
    setCardChoiceTwo(null)
    setCards(shuffledCards)
    setTurns(0)
  }

//handle a choice
const handleChoice = (card) => {
  cardChoiceOne ? setCardChoiceTwo(card) : setCardChoiceOne(card)
}

//compare 2 selected cards
useEffect(() => {
  if (cardChoiceOne && cardChoiceTwo) {
    setDisabled(true)
    if (cardChoiceOne.src === cardChoiceTwo.src) {
      setCards(prevCards => {
        return prevCards.map(card => {
          if (card.src === cardChoiceOne.src) {
            return {...card, matched: true}
          } else {
            return card
          }
        })
      })
      resetTurn()
    } else {
      setTimeout(() => resetTurn(), 1000)
    }
  }
}, [cardChoiceOne, cardChoiceTwo])

console.log(cards)

//reset choices & increase turn
const resetTurn = () => {
  setCardChoiceOne(null)
  setCardChoiceTwo(null)
  setTurns(prevTurns => prevTurns +1)
  setDisabled(false)
}

// start a new game automatically
useEffect(() => {
  shuffleCards()
}, [])

  return (
    <div className="App">
      <h1>Memory Dictator</h1>
      <button onClick={shuffleCards}>New Game</button>
      
      <div className="card-grid">
        {cards.map(card => (
          <SingleCard 
            key={card.id} 
            card={card}
            handleChoice= {handleChoice}
            flipped={card === cardChoiceOne || card === cardChoiceTwo || card.matched}
            disabled={disabled} />
        ))}
    </div>
    <p>Turns: {turns}</p>
    </div>
  );
}

export default App;
