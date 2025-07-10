import React from 'react'

const Title = ({t1,t2}) => {
  return (
    <div className='inline-flex gap-2 items-center mb-3'>
        <p className='text-gray-500'>{t1} <span className='text-gray-700 font-medium'></span>{t2}</p>
        <p className='w-8 sm:w-12 h-[1px] sm:h-[2px] bg-gray-500 '></p>
    </div>
  )
}

export default Title