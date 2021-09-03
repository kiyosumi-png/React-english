import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Title from './sidebar/Title';

export default function Sidebar() {
    return (
        <Container>
            <Link to="/tech" style={{ textDecoration: 'none' }}>
                <Title text="Tech" />
            </Link>

            <Link to="/youtube" style={{ textDecoration: 'none' }}>
                <Title text="YouTube" />
            </Link>

            <Link to="/daily" style={{ textDecoration: 'none' }}>
                <Title text="Daily" />
            </Link>
        </Container>
    );
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
    padding-top: 80px;
`;
