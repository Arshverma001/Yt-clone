import React from 'react'

const SIdebarRow = ({selected,Icon,title}) => {
  return (
    <div className={`${selected?'bg-[lightgrey] font-bold':''}`}>
    <div className='flex align-middle my-2 hover:bg-[lightgrey] hover:font-bold cursor-pointer py-2'>
        <Icon className='text-[#606060] mx-3 hover:text-red-500'/>
        <h1 className=' flex'>{title}</h1>
    </div>
    </div>
  )
}

export default SIdebarRow;