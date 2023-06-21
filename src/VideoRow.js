import React from 'react'

const VideoRow = ({views, subs, description, timestamp, channel, title, image}) => {
  return (
    
    <div className='flex m-4'>
            <img src={image} alt="" className='h-[138px] w-[246px] cursor-pointer'/>
            <div className='ml-16 justify-center'>
                <h2 >{title}</h2>
                <p className=' text-[#606060] text-sm'>
                    {channel} • {" "}
                    <span className='bg-[lightgrey]'>
                        <span className='text-blue-400'>{subs}</span> Subscribers 
                    </span> {" "}
                    {views} views • {timestamp}
                </p>
                <p className=' text-[#606060] text-sm'>{description}</p>
            </div>
        </div>
  )
}

export default VideoRow