import React from 'react'
import SIdebarRow from './SIdebarRow';
import HomeIcon from '@mui/icons-material/Home';
import WhatshotIcon from '@mui/icons-material/Whatshot';
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary';
import SubscriptionsOutlinedIcon from '@mui/icons-material/SubscriptionsOutlined';
import HistoryIcon from '@mui/icons-material/History';
import OndemandVideoIcon from '@mui/icons-material/OndemandVideo';
import WatchLaterIcon from '@mui/icons-material/WatchLater';
import ThumbUpAltOutlinedIcon from '@mui/icons-material/ThumbUpAltOutlined';
import ExpandMoreOutlinedIcon from '@mui/icons-material/ExpandMoreOutlined';
function Sidebar  ()  {
  return (
    <div className='basis-1/5' >
        <SIdebarRow selected Icon={HomeIcon} title='Home' />
        <SIdebarRow Icon={WhatshotIcon} title='Trending' />
        <SIdebarRow Icon={SubscriptionsOutlinedIcon} title='Subscription' />
        
        <hr className=' h-[1px] my-3 bg-[lightgrey]'></hr>
        <div className='align-middle'>
         <SIdebarRow Icon={VideoLibraryIcon} title='Library'/>
        <SIdebarRow  Icon={HistoryIcon}  title='History'/>
        <SIdebarRow  Icon={OndemandVideoIcon}  title='Your Videos'/>
        <SIdebarRow  Icon={WatchLaterIcon} title='Watch Later'/>
        <SIdebarRow Icon={ThumbUpAltOutlinedIcon}  title='Liked Videos'/>
        <SIdebarRow Icon={ExpandMoreOutlinedIcon}  title='Show more'/>       
        </div>
        <hr className=' h-[1px] my-3 bg-[lightgrey]'></hr>
    </div>
  )
}

export default Sidebar