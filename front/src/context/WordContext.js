import React, { createContext, useReducer } from 'react';
import { wordReducer } from '../reducers/wordReducer';

export const WordContext = createContext();

const WordContextProvider = (props) => {
  const [words, dispatch] = useReducer(wordReducer, []);

  return(
    <WordContext.Provider value={{words, dispatch}}>
       { props.children }
    </WordContext.Provider>
  )
}

export default WordContextProvider;