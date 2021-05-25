import React from 'react';
import style from '../style/sidebarOptions.module.css';


export default function SidebarOptions({ text, Icon }) {
  return (
    <div className={style.sidebarOptions}>
        <Icon />
        <h2>{text}</h2>
    </div>
  )
}
