import React from 'react'
import './css/font.css'
import './css/style.css'

const Font = () => {
  return (
      <div className='font_wrap'>
        <p className='bold'>폰트 적용하기</p>
        <p className='semi-bold'>가나다라마바사</p>
        <p className='medium'>가나다라마바사</p>
        <p className='normal'>가나다라마바사</p>
        <p className="light">가나다라마바사</p>
        <p className="thin">가나다라마바사</p>
      </div>
  )
}

export default Font