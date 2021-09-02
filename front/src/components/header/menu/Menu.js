import styled from 'styled-components';
import { useState } from 'react';
import { FlagContext } from '../../../context/FlagContext';
import InputMolecule from '../menu_contents_molecule/InputMolecule';
import AddButton from './InputButton';
import { Link } from 'react-router-dom';

export default function Menu() {
    const [addStatus, setAddStatus] = useState(false);

    return (
        <Container>
            <FlagContext.Provider value={{ addStatus, setAddStatus }}>
                <AddButton />
                <InputMolecule />

                <Link to="/auth/sign_in" style={{ textDecoration: 'none' }}>
                    <p>sign in</p>
                </Link>
                <Link to="/auth/sign_up" style={{ textDecoration: 'none' }}>
                    <p>sign up</p>
                </Link>
            </FlagContext.Provider>
        </Container>
    );
}

const Container = styled.div`
    display: flex;
`;

// Headerの左menuのpartが集まる
