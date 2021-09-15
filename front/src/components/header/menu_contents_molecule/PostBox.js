import { useState } from 'react';
import styled from 'styled-components';
import { collection, addDoc } from 'firebase/firestore/lite';

import Button from '../Button';
import { db } from '../../../firebase';

function PostBox() {
    const [english, setEnglish] = useState('');
    const [japanese, setJapanese] = useState('');
    const [type, setType] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        switch (type) {
            case 'tech':
                addDoc(collection(db, 'tech-words'), {
                    english: english,
                    japanese: japanese,
                });
                break;

            case 'youtube':
                addDoc(collection(db, 'youtube-words'), {
                    english: english,
                    japanese: japanese,
                });
                break;

            case 'daily':
                addDoc(collection(db, 'daily-words'), {
                    english: english,
                    japanese: japanese,
                });
                break;

            default:
                alert('カテゴリーがありません');
        }

        setEnglish('');
        setJapanese('');
        setType('');
    };

    return (
        <Container>
            <form onSubmit={handleSubmit}>
                <input
                    placeholder="please write english"
                    value={english}
                    onChange={(e) => setEnglish(e.currentTarget.value)}
                />

                <input
                    placeholder="please write japanese"
                    value={japanese}
                    onChange={(e) => setJapanese(e.currentTarget.value)}
                />

                <input
                    placeholder="please write type"
                    value={type}
                    onChange={(e) => setType(e.currentTarget.value)}
                />

                <Button text="付ける" />
            </form>
        </Container>
    );
}

export default PostBox;

const Container = styled.div`
    form {
        display: flex;
    }
`;
