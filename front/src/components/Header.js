import styled from 'styled-components';

import Menu from './header/menu/Menu';

function Header() {
    return (
        <Container>
            <Menu />
        </Container>
    );
}

export default Header;

const Container = styled.div`
    display: flex;
    max-height: 60px;
    align-items: center;
    justify-content: space-between;
    padding: 0 20px;
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 10;
    background-color: #fff6d9;
`;
