import React from 'react';
import styled from 'styled-components';
import { Route } from 'react-router-dom';
import YouTube from './feed/YouTube';
import Tech from './feed/Tech';
import Daily from './feed/Daily';
// import PostBox from './feed/PostBox';

export default function Feed() {
    return (
        <Container>
            {/* <PostBox /> */}
            <Route exact path="/Tech" component={Tech} />
            <Route exact path="/YouTube" component={YouTube} />
            <Route exact path="/Daily" component={Daily} />
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
