import React, { createContext, useReducer } from 'react';
import { WordReducer } from '../reducers/WordReducer';

export const WordContext = createContext();

const WordContextProvider = (props) => {
    const [words, dispatch] = useReducer(WordReducer, []);

    return (
        <WordContext.Provider value={{ words, dispatch }}>
            {props.children}
        </WordContext.Provider>
    );
};

export default WordContextProvider;
