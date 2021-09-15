import React from 'react';
import { signOut } from 'firebase/auth';
import { useHistory } from 'react-router-dom';

import { auth } from '../../firebase';

function SignOut() {
    const history = useHistory();

    const handleSignOut = async (event) => {
        event.preventDefault();
        try {
            await signOut(auth);
            history.push('/');
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <form onSubmit={handleSignOut}>
            <input type="submit" value="Sign out" />
        </form>
    );
}

export default SignOut;
