// Write your code here.
import './index.css'

const EmojiCard = props => {
  const {each, addid, clickedlist} = props
  const {emojiUrl, emojiName, id} = each
  const onclickemoji = () => {
    addid(id)
  }
  return (
    <li className="cardbg" onClick={onclickemoji}>
      <button>
        <img src={emojiUrl} alt={emojiName} className="img" />
      </button>
    </li>
  )
}
export default EmojiCard
