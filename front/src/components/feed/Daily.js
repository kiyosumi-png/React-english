import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import db from '../../firebase';
import Text from './Text';

function useDailyWords() {
    const [words, setWords] = useState([]);

    useEffect(() => {
        db.collection('daily-words').onSnapshot((snapshot) => {
            const newWords = snapshot.docs.map((doc) => ({
                ...doc.data(),
            }));

            setWords(newWords);
        });
    });

    return words;
}

export default function Daily() {
    const words = useDailyWords();

    return (
        <Container>
            {words.map((word, index) => (
                <Text
                    english={word.english}
                    japanese={word.japanese}
                    key={index}
                />
            ))}
        </Container>
    );
}

const Container = styled.div``;
