import { useState, useEffect } from 'react';
import styled from 'styled-components';
import db from '../../firebase';

import Text from './Text';

function useYouTubeWords() {
    const [words, setWords] = useState([]);

    useEffect(() => {
        db.collection('youtube-words').onSnapshot((snapshot) => {
            const newWords = snapshot.docs.map((doc) => ({
                ...doc.data(),
            }));

            setWords(newWords);
        });
    });

    return words;
}

export default function YouTube() {
    const words = useYouTubeWords();

    return (
        <Container>
            {words.map((word) => (
                <Text english={word.english} japanese={word.japanese} />
            ))}
        </Container>
    );
}

const Container = styled.div``;
