import React from 'react';
import { signOut } from 'firebase/auth';

import { auth } from '../../firebase';

function SignOut() {
    const handleSignOut = async (event) => {
        event.preventDefault();
        try {
            signOut(auth);
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
