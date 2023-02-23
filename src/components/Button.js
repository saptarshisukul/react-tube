import React from 'react'

const Button = ({name}) => {
  return (
    <div className='px-3'>
        <button className='m-3 px-3 py-2 bg-gray-400 rounded-md'>{name}</button>
    </div>
  )
}

export default Button