import React, { useState } from 'react'
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import VideoCallIcon from '@mui/icons-material/VideoCall';
import AppsIcon from '@mui/icons-material/Apps';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { Avatar } from '@mui/material';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
const Header = () => {

  const[inputSearch,setinputSearch]=useState("")

  return (
    <div className='flex m-4 space-x-[25rem] align-middle sticky top-0 z-10 bg-white'> 
        <div className='flex h-[1.2rem] w-max mt-2'>
        <MenuIcon/>
        <Link to={`/`}>
        <img className='ml-4 ' src='https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/YouTube_Logo_2017.svg/508px-YouTube_Logo_2017.svg.png' alt=''/>
        </Link>
        </div>  
        <div className='flex  rounded-3xl border-2 border-grey  '>
            <div>
            <input 
            onChange={(e) => setinputSearch(e.target.value)}
            value={inputSearch} 
            type='text' placeholder='Search' className='h-[1.2rem] w-[20rem] rounded-lg m-2'/>
            </div>
        <Link to={`/search/${inputSearch}`}>
          <SearchIcon className='m-2 bg-gray-200 rounded-r-[100%]'/>
        </Link>

        </div>
        <div className='flex space-x-4'>
        <div className='mt-2 flex space-x-4'>
        <VideoCallIcon/>
        <AppsIcon/>
        <NotificationsIcon/>
        </div>
        <Avatar
         alt=''
         src='https://yt3.ggpht.com/ytc/AGIKgqPUYWbnR5Ql7ZxPfJLtlSdwMs1RDagyc_AXAeXM5MIu2l86Iczy3MYWPKEaH3Iw=s88-c-k-c0x00ffffff-no-rj-mo'
         />
        </div>

    </div>
  )
}

export default Header