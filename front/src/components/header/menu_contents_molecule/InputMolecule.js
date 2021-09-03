import { useContext } from 'react';
import styled from 'styled-components';
import CloseIcon from '@material-ui/icons/Close';

import { FlagContext } from '../../../context/FlagContext';
import InputMolecule2 from './InputMolecule2';

export default function InputMolecule() {
    const { flag, setFlag } = useContext(FlagContext);

    return (
        <Container status={flag}>
            <CloseContainer>
                <Close onClick={() => setFlag(false)} />
            </CloseContainer>
            <InputMolecule2 />
        </Container>
    );
}

const Container = styled.div`
    position: fixed;
    display: flex;
    top: 0;
    right: 0;
    padding: 20px;
    list-style: none;
    transform: ${(props) =>
        props.status ? 'translateX(0)' : 'translateX(100%)'};
    transition: transform 0.2s ease-in;
    li {
        padding: 15px 0;
        border-bottom: 1px solid rgba(0, 0, 0, 0.2);
        a {
            font-weight: 600;
        }
    }
`;

const Close = styled(CloseIcon)`
    cursor: pointer;
`;

const CloseContainer = styled.div``;
