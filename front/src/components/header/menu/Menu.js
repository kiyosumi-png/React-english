import styled from 'styled-components';
import { useState } from 'react';
import { FlagContext } from '../../../context/FlagContext';
import InputMolecule from '../menu_contents_molecule/InputMolecule';
import AddButton from './InputButton';

export default function Menu() {
    const [addStatus, setAddStatus] = useState(false);

    return (
        <Container>
            <FlagContext.Provider value={{ addStatus, setAddStatus }}>
                <AddButton />
                <InputMolecule />
            </FlagContext.Provider>
        </Container>
    );
}

const Container = styled.div`
    display: flex;
`;

// Headerの左menuのpartが集まる
