import { useState } from 'react'
import './App.css';

const cardImages = [
  { "src": "/img/idi-amin.jpg" },
  { "src": "/img/kim_jong_il_portrait-2.jpg" },
  { "src": "/img/peron.jpg" },
  { "src": "/img/qaddafi.jpg"  },
  { "src": "/img/stalin.jpg" },
  { "src": "/img/trujillo.jpg"  }
]



function App() {
  const [cards, setCards] = useState([])
  const [turns, setTurns] = useState(0)
  const shuffleCards = () => {
    const shuffledCards = [...cardImages, ...cardImages]
      .sort(() => Math.random() - 0.5)
      .map((card) => ({ ...card, id: Math.random() }))

    setCards(shuffledCards)
    setTurns(0)
  }

console.log(cards, turns)

  return (
    <div className="App">
      <h1>Memory Dictator</h1>
      <button onClick={shuffleCards}>New Game</button>
      <div className="card-grid">
        {cards.map(card => (
          <div className="card" key={card.id}>
            <div>
              <img className="front" src={card.src} alt="card front" />
              <img className="back" src='/img/5 United Nations emblem.jpg' alt="card back" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
