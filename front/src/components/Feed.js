import { Route } from 'react-router-dom';
import styled from 'styled-components';

import YouTube from './feed/YouTube';
import Tech from './feed/Tech';
import Daily from './feed/Daily';

export default function Feed() {
    return (
        <Container>
            <Route exact path="/tech" component={Tech} />
            <Route exact path="/youtube" component={YouTube} />
            <Route exact path="/daily" component={Daily} />
        </Container>
    );
}

const Container = styled.div`
    padding: 100px;
    margin: 100px;
    min-width: 716px;
    background: rgba(199, 209, 148, 0.2);
    height: 100vh;
`;
