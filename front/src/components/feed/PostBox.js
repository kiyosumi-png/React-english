import React, { useContext, useState } from 'react';
import { WordContext } from '../../context/WordContext';

export default function PostBox() {
  const { dispatch } = useContext(WordContext);
  const [english, setEnglish] = useState();
  const [japanese, setJapanese] = useState();
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({type: 'addWord', word: {
      english, japanese
    }});
    setEnglish();
    setJapanese();
  }
  return (
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="please write english" value={english} onChange={(e) => setEnglish(e.target.value)}/>

        <input type="text" placeholder="please write japanese" value={japanese} onChange={(e) => setJapanese(e.target.value)}/>

        <input type="submit" />
      </form>
  )
}

 