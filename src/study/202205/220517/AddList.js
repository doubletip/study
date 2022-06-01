import React , {useState}from 'react'

const AddList = () => {
    const [data, setData] = useState([])
    const [inputData, setInputData] = useState('');

    const handleClick = () => {
        setData([...data, inputData])
        setInputData('')
    }

  return (
      <div className="addlist">
          <h2>Add List</h2>
          <div className='addlist_wrap'>
              <input type="text" placeholder='내용을 입력하세요.' value={inputData} onChange={(e)=> setInputData(e.target.value)} />
              <button onClick={handleClick}>입력하기</button>
              {
                  data.map((item,idx) => <p key={idx}>{item}</p>)
              }
          </div>
      </div>
  )
}

export default AddList