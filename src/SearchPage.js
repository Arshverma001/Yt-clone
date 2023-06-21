import React from 'react'
import TuneIcon from '@mui/icons-material/Tune';
import ChannelRow from './ChannelRow';
import VideoRow from './VideoRow';
const SearchPage = () => {
  return (
    <div className='basis-4/5  bg-[#f9f9f9] p-5 mt-[7px]'>
      <div className='flex text-[#808080] content-center text-sm'>
        <TuneIcon/>
        <h2 className='ml-4'>FILTER</h2>
      </div>
      <hr className=' h-[1px] my-3 bg-[lightgrey]'></hr>

      <div className='flex flex-col'>
      <ChannelRow
            image="https://graphicsfamily.com/wp-content/uploads/edd/2021/09/Gaming-Logo-Design-Template-1536x864.jpg"
            channel="Ahmad Zaky"
            verified
            subs="12K"
            noOfVideos={20}
            description="Programmer Think and Grow Rich"
            />
             <hr className=' h-[1px] my-3 bg-[lightgrey]'></hr>

             <VideoRow
            views="61K"
            subs="12.6K"
            description="Hi people with the spirit of learning, pada kali ini kita akan belajar apa itu fiverr dan kenapa kita bisa menggunakan platform ..."
            timestamp="1 years ago"
            channel="BuildWith Angga"
            title="Belajar Fiverr Langsung Dari Mentor Expert — Eps. 3"
            image="https://i.ytimg.com/vi/GmvdZ4lUHnY/hqdefault.jpg?sqp=-oaymwEZCNACELwBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLBa6YYEVUIttQ0K1r85uUMRzumIxQ"
            />

            <VideoRow
            views="61K"
            subs="12.6K"
            description="Hi people with the spirit of learning, pada kali ini kita akan belajar apa itu fiverr dan kenapa kita bisa menggunakan platform ..."
            timestamp="1 years ago"
            channel="BuildWith Angga"
            title="Belajar Fiverr Langsung Dari Mentor Expert — Eps. 3"
            image="https://i.ytimg.com/vi/GmvdZ4lUHnY/hqdefault.jpg?sqp=-oaymwEZCNACELwBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLBa6YYEVUIttQ0K1r85uUMRzumIxQ"
            />

<VideoRow
            views="3.1M"
            subs="1.23M"
            description="Watch this JavaScript tutorial for beginners to learn JavaScript basics in one hour. 🔥Get my Complete JavaScript Course with a..."
            timestamp="2 years ago"
            channel="Programming with Mosh"
            title="JavaScript Tutorial for Beginners: Learn JavaScript in 1 Hour [2020]"
            image="https://i.ytimg.com/vi/W6NZfCO5SIk/hqdefault.jpg?sqp=-oaymwEZCNACELwBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLCE3fbsB0deZPlgm79U9HlO8DG-0A"
            />


            <VideoRow
            views="3.1M"
            subs="1.23M"
            description="Watch this JavaScript tutorial for beginners to learn JavaScript basics in one hour. 🔥Get my Complete JavaScript Course with a..."
            timestamp="2 years ago"
            channel="Programming with Mosh"
            title="JavaScript Tutorial for Beginners: Learn JavaScript in 1 Hour [2020]"
            image="https://i.ytimg.com/vi/W6NZfCO5SIk/hqdefault.jpg?sqp=-oaymwEZCNACELwBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLCE3fbsB0deZPlgm79U9HlO8DG-0A"
            />

            <VideoRow
            views="2.4M"
            subs="1.23M"
            description="React Tutorial - Learn to build fast web apps with React (React js) from scratch. 🔥Get the complete React course: ..."
            timestamp="2 years ago"
            channel="Programming with Mosh"
            title="React Tutorial for Beginners [React js]"
            image="https://i.ytimg.com/vi/Ke90Tje7VS0/hqdefault.jpg?sqp=-oaymwEZCNACELwBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLBIQ5WzXVRH8bb9tiV5khu2jAe4HA"
            />

            <VideoRow
            views="2M"
            subs="2.37M"
            description="Learn the basics of HTML5 and web development in this awesome course for beginners. ⭐️ Contents ⭐️ ⌨️ (0:00:00) ..."
            timestamp="1 years ago"
            channel="freeCodeCamp.org"
            title="HTML Full Course - Build a Website Tutorial"
            image="https://i.ytimg.com/vi/pQN-pnXPaVg/hqdefault.jpg?sqp=-oaymwEZCNACELwBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLDSHd4tgm81VMHWtFRnQJDAe-K3Bg"
            />
            </div>
      </div>
  )
}

export default SearchPage