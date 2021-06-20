import styled from 'styled-components';
import AddButton from './AddButton';

export default function Menu() {
    return (
        <Container>
            <AddButton />
        </Container>
    );
}

const Container = styled.div`
    display: flex;
`;

// Headerの左menuのpartが集まる
