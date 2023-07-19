import Comment from '@/components/singletrack/Comment'
import Licence from '@/components/singletrack/Licence'
import MusicSingle from '@/components/singletrack/MusicSingle'
import React from 'react'

const singletrackpage = () => {
  return (
    <div>
      <MusicSingle/>
      <Licence/>
      <Comment/>
    </div>
  )
}

export default singletrackpage
