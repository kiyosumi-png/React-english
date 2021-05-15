import React from 'react'
import SidebarOptions from './SidebarOptions'
import YouTubeIcon from '@material-ui/icons/YouTube';

export default function Sidebar() {
  return (
    <div className="sidebar">
        <SidebarOptions text="YouTube" Icon={YouTubeIcon} />
        <SidebarOptions text="Tech" Icon={YouTubeIcon}/>
        <SidebarOptions text="Daily" Icon={YouTubeIcon}/>
    </div>
  )
}

