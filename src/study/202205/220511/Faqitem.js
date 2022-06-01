import React from 'react'
import { FaMinus, FaPlus } from "react-icons/fa";


const Faqitem = ({ item , handleClick , click}) => {
    const { id, title, desc} = item
  return (
    <li className={`faq_item ${click===id ? 'on' : ""}`} onClick={()=> handleClick(id)}>
        <div className="title">
            <p className="text">{title}</p>
            <button>
                {
                    click===id ? (
                        <FaPlus className="plus"/>
                    ) : (
                    <FaMinus className='minus'/>
                    )
                }
            </button>
        </div>
        {
            click===id ? (
                <div className="desc">
                    {desc}
                </div>
            ) : ""
        }

    </li>
  )
}

export default Faqitem