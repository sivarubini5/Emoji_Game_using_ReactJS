// Write your code here.
import './index.css'

const NavBar = props => {
  const {score, topscore} = props
  return (
    <div className="navbg">
      <div className="c">
        <img
          src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png"
          alt="emoji logo"
        />
        <h1>Emoji Game</h1>
      </div>
      <div className="c">
        <p>Score: {score}</p>
        <p>Top Score: {topscore}</p>
      </div>
    </div>
  )
}
export default NavBar
