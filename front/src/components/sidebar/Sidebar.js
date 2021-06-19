import styled from 'styled-components';
import Title from './Title';

function Sidebar() {
    return (
        <Container>
            <Title text="Tech" />
            <Title text="YouTube" />
            <Title text="Daily" />
        </Container>
    );
}

export default Sidebar;

const Container = styled.div`
    display: flex;
    flex-direction: column;
    padding-top: 80px;
`;
