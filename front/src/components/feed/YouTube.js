import React, { useState, useEffect } from 'react';
import db from '../../firebase';

function useYouTubeWords() {
  const [words, setWords] = useState([])

  useEffect(() => {
    db.collection('youtube-words').onSnapshot((snapshot) => {
      const newWords = snapshot.docs.map((doc) => ({
        ...doc.data()
      }))

      setWords(newWords)
    })
  })

  return words
}

export default  function YouTube() {
  const words = useYouTubeWords()

  return (
    <div className="YouTube" >
      <h2>Please write vocabulary related to YouTube</h2>
           {words.map((word) => 
             <ul>
                 <li>{ word.english }</li>
                 <li>{ word.japanese }</li>
            </ul>
           )}
    </div>
  )
}

