import './singleCard.css'

export default function SingleCard({ card, handleChoice }) {
  
  const handleClick = () => {
    handleChoice(card)
  }
  
  return (   
  <div className="card" >
    <div>
      <img className="front" src={card.src} alt="card front" />
      <img 
        className="back" 
        src='/img/5 United Nations emblem.jpg' 
        alt="card back"
        onClick={handleClick} />
    </div>
  </div>
  )
}
