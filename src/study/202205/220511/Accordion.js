import { useState } from 'react';
import Faqitem from './Faqitem';


const data = [
  {
    id: 0,
    title: '아코디언 제목1',
    desc : '아코디언 텍스트1'
  },
  {
    id: 1,
    title: '아코디언 제목2',
    desc : '아코디언 텍스트2'
  },
  {
    id: 2,
    title: '아코디언 제목3',
    desc : '아코디언 텍스트3'
  },
  {
    id: 3,
    title: '아코디언 제목4',
    desc : '아코디언 텍스트4'
  },
  {
    id: 4,
    title: '아코디언 제목5',
    desc : '아코디언 텍스트5'
  },
]

function Accordion() {

  const [click, setClick] = useState(false);

  const handleClick = (id) => {

    if(click === id){
      setClick(null)
    }

    setClick(id)
  }

  return (
    <div className="accordion">
      <h2>Accordion</h2>
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

export default Accordion;
