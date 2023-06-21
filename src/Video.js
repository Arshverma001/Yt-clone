import { Avatar } from '@mui/material'
import React from 'react'

const Video = ({title,channelImage,channel,timestamp,views,image}) => {
  return (
    <div className='w-[270px] mb-10 mr-4'>
        <div className='h-[140px] w-[250px]'>
        <img src={image} alt=''/>
        </div>
        <div className='flex mt-3'>
        <div className=''>
            <Avatar
            className='h-[10px] w-[10px]'
            alt=''
            src={channelImage} 
            />
        </div>
        <div className='text-justify'>
         <h4 className='text-[14px] mb-[5px]'>{title}</h4>
         <p className='text-[#808080] text-[14px]'>{channel}</p>
         <p className='text-[#808080] text-[14px]'>{views}•{timestamp}</p>
        </div>
        </div>
       
    </div>
  )
}

export default Video