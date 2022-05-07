import React, { useState } from 'react'


const Tabmenu1 = () => {
    return (
        <div className='tabitem'>탭 메뉴1</div>
    )
}
const Tabmenu2 = () => {
    return (
        <div className='tabitem'>탭 메뉴2</div>
    )
}
const Tabmenu3 = () => {
    return (
        <div className='tabitem'>탭 메뉴3</div>
    )
}

const Tabmenu = () => {

    const tabTitle = ["tabmenu1", "tabmenu2", "tabmenu3"]
    const tab = {
        0 : <Tabmenu1 />,
        1 : <Tabmenu2 />,
        2 : <Tabmenu3 />
    }

    const [activeTab, setActiveTab] = useState(0)
    const handleTabClick = idx => {
        setActiveTab(idx)
    }

  return (
      <div className="tabmenu_wrap">
          <h1>tab menu</h1>
          <ul className="tab_list">
              {
                  tabTitle.map((title, idx)=> (
                      <li 
                        className={activeTab === idx ? "tab_item active" : "tab_item"} 
                        key={idx} 
                        onClick={()=> handleTabClick(idx)}
                      >
                        {title}
                      </li>
                  ))
              }
          </ul>
          <div className='content'>
              {tab[activeTab]}
          </div>
      </div>
  )
}

export default Tabmenu