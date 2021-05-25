import React from 'react'
import SidebarOptions from './SidebarOptions'
import YouTubeIcon from '@material-ui/icons/YouTube';
import ComputerIcon from '@material-ui/icons/Computer';
import BusinessIcon from '@material-ui/icons/Business';
import { Link } from 'react-router-dom';



export default function Sidebar() {
  return (
      <div className="sidebar">
        <Link to="/Tech" style={{ textDecoration: 'none' }} >
          <SidebarOptions text="Tech" Icon={ComputerIcon}/>
        </Link>

        <Link exact to="/YouTube" style={{ textDecoration: 'none' }} >
          <SidebarOptions text="YouTube" Icon={YouTubeIcon} />
        </Link>

        <Link to="/Daily" style={{ textDecoration: 'none' }} >
          <SidebarOptions text="Daily" Icon={BusinessIcon}/>
        </Link>
      </div>
  )
}

