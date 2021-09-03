import styled from 'styled-components';
import { Link } from 'react-router-dom';

import FlagContextProvider from '../../../context/FlagContext';
import InputMolecule from '../menu_contents_molecule/InputMolecule';
import AddButton from './InputButton';

export default function Menu() {
    return (
        <Container>
            <FlagContextProvider>
                <AddButton />
                <InputMolecule />
            </FlagContextProvider>

            <Link to="/auth/sign_in" style={{ textDecoration: 'none' }}>
                <p>sign in</p>
            </Link>
            <Link to="/auth/sign_up" style={{ textDecoration: 'none' }}>
                <p>sign up</p>
            </Link>
        </Container>
    );
}

const Container = styled.div`
    display: flex;
`;

// Headerの左menuのpartが集まる
