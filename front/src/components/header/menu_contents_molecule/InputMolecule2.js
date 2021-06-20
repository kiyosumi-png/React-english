import { useContext, useState } from 'react';
import { WordContext } from '../../../context/WordContext';
import db from '../../../firebase';
import styled from 'styled-components';
import Button from '../Button';

function InputMolecule2() {
    const { dispatch } = useContext(WordContext);
    const [english, setEnglish] = useState('');
    const [japanese, setJapanese] = useState('');
    const [type, setType] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch({
            type: 'addWord',
            word: {
                english,
                japanese,
            },
        });

        db.collection('youtube-words').add({
            english: english,
            japanese: japanese,
            type: type,
        });

        setEnglish();
        setJapanese();
        setType();
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

export default InputMolecule2;

const Container = styled.div`
    form {
        display: flex;
    }
`;
