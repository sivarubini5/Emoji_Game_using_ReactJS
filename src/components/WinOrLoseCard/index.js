// Write your code here.
import './index.css'

const WinOrLoseCard = props => {
  const {score, onbuttonclick} = props
  const text = score < 12 ? 'Lose' : 'Won'
  const al = score < 12 ? 'lose' : 'win'
  let para
  if (text === 'Won') {
    para = 'Best'
  }
  const onclickbutton = () => {
    onbuttonclick()
  }
  const image =
    score === 12
      ? 'https://assets.ccbp.in/frontend/react-js/won-game-img.png'
      : 'https://assets.ccbp.in/frontend/react-js/lose-game-img.png'
  return (
    <div className="in fbg bg">
      <div>
        <h1 className="p">You {text}</h1>
        <p className="p">{para} Score</p>
        <p className="m">{score}/12</p>
        <button type="button" onClick={onclickbutton} className="button">
          Play Again
        </button>
      </div>
      <div>
        <img src={image} className="wimg" alt={al} />
      </div>
    </div>
  )
}
export default WinOrLoseCard
