import './index.css'

const TabItem = props => {
  const {tabDetails, selectedTabId, onChangeTab} = props
  const {tabId, displayText} = tabDetails

  const tabItemClass = tabId === selectedTabId ? 'active-tab' : 'inactive-tab'

  const changeTab = () => {
    onChangeTab(tabId)
  }

  return (
    <li className="tab-item">
      <button type="button" className={tabItemClass} onClick={changeTab}>
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
