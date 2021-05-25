import React from 'react'


export default  function YouTube({ english, japanese }) {
  return (
    <div>
      <h2>Please write vocabulary related to YouTube</h2>
      <ul>
        <li>{ english }</li>
        <li>{ japanese }</li>
      </ul>
    </div>
  )
}

