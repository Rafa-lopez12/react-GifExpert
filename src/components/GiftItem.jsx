import React from 'react'

const GiftItem = ({title,url}) => {
  return (
    <div className='card'>
      <img src={url} alt={title} />
    </div>
  )
}

export default GiftItem
