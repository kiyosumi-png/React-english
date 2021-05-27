import React, { useContext } from 'react'
import { WordContext } from '../../context/WordContext';


export default  function YouTube() {
  // contextを使う
  const { words } = useContext(WordContext);

  return (
    <div className="YouTube" >
      <h2>Please write vocabulary related to YouTube</h2>
        {words.map(word => {
          return(
            <ul>
              <li>{ word.english }</li>
              <li>{ word.japanese }</li>
            </ul>
            )
        })}
    </div>
  )
}

