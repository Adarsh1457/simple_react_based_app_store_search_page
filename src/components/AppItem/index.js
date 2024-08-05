import './index.css'
const AppItem = props => {
  const {eachItem} = props
  const {appId, appName, imageUrl, category} = eachItem
  return (
    <li className="app-box">
      <img src={imageUrl} alt={appName} className="app-img" />
      <p className="app-name">{appName}</p>
    </li>
  )
}

export default AppItem
