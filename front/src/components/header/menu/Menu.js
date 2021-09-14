import { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { onAuthStateChanged } from 'firebase/auth';

import FlagContextProvider from '../../../context/FlagContext';
import InputMolecule from '../menu_contents_molecule/InputMolecule';
import AddButton from './InputButton';
import { auth } from '../../../firebase';
import SignOut from '../../userAuth/SignOut';

export default function Menu() {
    const [isSignedIn, setIsSignedIn] = useState(false);

    onAuthStateChanged(auth, (user) => {
        if (user) {
            setIsSignedIn(true);
        } else {
            setIsSignedIn(false);
        }
    });

    return (
        <Container>
            <FlagContextProvider>
                <AddButton />
                <InputMolecule />
            </FlagContextProvider>
            <div>
                {isSignedIn ? (
                    <div>
                        <p>now sign in</p>
                        <SignOut />
                    </div>
                ) : (
                    <div>
                        <Link to="/sign_in" style={{ textDecoration: 'none' }}>
                            <p>sign in</p>
                        </Link>
                        <Link to="/sign_up" style={{ textDecoration: 'none' }}>
                            <p>sign up</p>
                        </Link>
                    </div>
                )}
            </div>
        </Container>
    );
}

const Container = styled.div`
    display: flex;
`;

// Headerの左menuのpartが集まる
