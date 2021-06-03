import React, { useContext, useState } from 'react';
import { WordContext } from '../../context/WordContext';
import db from '../../firebase';

export default function PostBox() {
  const { dispatch } = useContext(WordContext);
  const [english, setEnglish] = useState('');
  const [japanese, setJapanese] = useState('');
  const [type, setType] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({type: 'addWord', word: {
      english, japanese
    }});

    db.collection("youtube-words").add({
      english: english,
      japanese: japanese,
      type: type
    });

    setEnglish();
    setJapanese();
    setType();
  }

  return (
      <form onSubmit={handleSubmit}>
        <div>
          <label>英語</label>
          <input type="text" placeholder="please write japanese" value={english} onChange={e => setEnglish(e.currentTarget.value)}/>
        </div>
        <div>
          <label>日本語</label>
          <input type="text" placeholder="please write japanese" value={japanese} onChange={e => setJapanese(e.currentTarget.value)}/>
        </div>
        <div>
          <label>単語の種類</label>
          <input type="text" placeholder="please write japanese" value={type} onChange={e => setType(e.currentTarget.value)}/>
        </div>
        <button>送信</button>
      </form>
  )
}

 