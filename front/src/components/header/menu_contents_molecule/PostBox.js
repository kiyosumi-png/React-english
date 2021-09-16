import { useState } from 'react';
import styled from 'styled-components';

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
                db.collection('tech-words').add({
                    english: english,
                    japanese: japanese,
                });
                break;

            case 'youtube':
                db.collection('youtube-words').add({
                    english: english,
                    japanese: japanese,
                });
                break;

            case 'daily':
                db.collection('daily-words').add({
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
