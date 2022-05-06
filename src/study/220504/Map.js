import React from 'react'

const store = [
  {
    product : "pants",
    price : "20,000won"
  },
  {
    product : "apple",
    price : "10,000won"
  },
  {
    product : "snack",
    price : "2,000won"
  },
  {
    product : "shoes",
    price : "80,000won"
  },
]

const Map = () => {
  return (
    <div className="react_map_wrap">
      <h1>react map</h1>
      <div className='react_map'>
        {
          store.map((item, idx)=> (
            <div key={idx}>
              <p>{item.product}</p>
              <p>{item.price}</p>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default Map