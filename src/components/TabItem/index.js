// Write your code here
import './index.css'
const TabItem = props => {
  const {eachItem, ChangeTheState,activeTab} = props
  const {tabId, displayText} = eachItem
  const btnClick = () => {
    ChangeTheState(tabId)
  }
  const otherC = activeTab===tabId ? 'activeBtn' :''
  return (
    <li>
      <button type="button" onClick={btnClick} className={otherC}>
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
