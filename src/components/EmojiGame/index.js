/* 
Quick Tip 

- Use the below function in the EmojiGame Component to shuffle the emojisList every time when an emoji is clicked.

const shuffledEmojisList = () => {
  const {emojisList} = this.props
  return emojisList.sort(() => Math.random() - 0.5)
}

*/

// Write your code here.
import {Component} from 'react'

import NavBar from '../NavBar'

import EmojiCard from '../EmojiCard'

import WinOrLoseCard from '../WinOrLoseCard'

import './index.css'

class EmojiGame extends Component {
  state = {
    score: 0,
    topscore: 0,
    cardlist: this.props.emojisList,
    clickedlist: [],
    page: true,
  }

  onbuttonclick = () => {
    this.setState(prevState => ({
      score: 0,
      topscore: prevState.topscore,
      clickedlist: [],
      page: true,
    }))
  }

  shufflelist = () => {
    const {cardlist} = this.state
    const sh = cardlist.sort(() => Math.random() - 0.5)
    this.setState({cardlist: sh})
  }

  addid = id => {
    this.shufflelist()
    const {clickedlist, score, topscore} = this.state
    console.log(score)
    let changedscore = topscore
    if (score > topscore) {
      changedscore = score
    }
    if (clickedlist.includes(id)) {
      console.log('out')
      this.setState({topscore: changedscore, score: score, page: false})
    } else {
      if (score === 11) {
        this.setState({
          topscore: changedscore + 1,
          score: score + 1,
          page: false,
        })
      } else {
        this.setState(prevState => ({
          score: prevState.score + 1,
          clickedlist: [...prevState.clickedlist, id],
        }))
      }
    }
  }

  render() {
    const {score, topscore, cardlist, clickedlist, page} = this.state
    return page === true ? (
      <div className="bg">
        <div className="navcontainer">
          <NavBar score={score} topscore={topscore} />
        </div>
        <div className="sec">
          <ul>
            {cardlist.map(each => (
              <EmojiCard
                each={each}
                key={each.id}
                addid={this.addid}
                clickedlist={clickedlist}
              />
            ))}
          </ul>
        </div>
      </div>
    ) : (
      <div className="fbg">
        <WinOrLoseCard score={score} onbuttonclick={this.onbuttonclick} />
      </div>
    )
  }
}
export default EmojiGame
