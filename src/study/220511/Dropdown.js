import { useState } from 'react';
import Faqitem from './Faqitem';


const data = [
  {
    id: 0,
    title: '드롭다운 제목1',
    desc : '드롭다운 텍스트1'
  },
  {
    id: 1,
    title: '드롭다운 제목2',
    desc : '드롭다운 텍스트2'
  },
  {
    id: 2,
    title: '드롭다운 제목3',
    desc : '드롭다운 텍스트3'
  },
  {
    id: 3,
    title: '드롭다운 제목4',
    desc : '드롭다운 텍스트4'
  },
  {
    id: 4,
    title: '드롭다운 제목5',
    desc : '드롭다운 텍스트5'
  },
]

function Dropdown() {

  const [click, setClick] = useState(false);

  const handleClick = (id) => {

    if(click === id){
      setClick(null)
    }

    setClick(id)
  }

  return (
    <div className="faq">
      <h2>Dropdown</h2>
      <div className="faq_wrap">
        <ul className="faq_list">
          {
            data.map((item)=> {
              return (
                <Faqitem
                  item={item}
                  key={item.id}
                  handleClick={handleClick}
                  click={click}
                  setClick={setClick}
                />
                )
            })
          }
        </ul>
      </div>
    </div>
  );
}

export default Dropdown;
