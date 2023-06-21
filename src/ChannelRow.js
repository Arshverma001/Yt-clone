import { Avatar } from '@mui/material'
import React from 'react'
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';

const ChannelRow = ({image,channel,verified,subs,noOfVideos,description}) => {
  return (
    <div className='flex'>
        <div className=' flex w-[70%] '>
        <img src={image} alt="" className='h-[210px] w-[210px] rounded-full ml-4'/>
        <div className='flex-col ml-[30%] mt-[8%] object-contain'>
        <h4>{channel} {verified && <CheckCircleOutlineIcon/> }</h4>
        <p className='text-[#606060] text-sm'>
            {subs} subscribers • {noOfVideos} videos
        </p>
        <p className='text-[#606060] text-sm'>{description}</p>
        </div>
        </div>
        
    </div>
  )
}

export default ChannelRow