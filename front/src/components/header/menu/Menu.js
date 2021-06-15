import styled from 'styled-components';
import AddButton from './AddButton';

function Menu() {
    return (
        <Container>
            <AddButton />
        </Container>
    );
}

export default Menu;

const Container = styled.div`
    display: flex;
`;

// Headerの左menuのpartが集まる
