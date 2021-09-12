// import { useState } from 'react';
import app from '../../firebase';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';

const SignIn = () => {
    const handleSignIn = async (event) => {
        event.preventDefault();
        const { email, password } = event.target.elements;
        const auth = getAuth(app);

        try {
            const userCredential = await signInWithEmailAndPassword(
                auth,
                email.value,
                password.value
            );
            console.log('success' + userCredential.user);
        } catch (error) {
            alert(error);
        }
    };

    return (
        <form style={{ marginTop: `150px` }} onSubmit={handleSignIn}>
            <div>
                <label>Enter your email:</label>
                <input type="email" name="email" />
            </div>
            <div>
                <label>Enter your password:</label>
                <input type="password" name="password" />
            </div>
            <div>
                <input type="submit" value="Sign in" />
            </div>
        </form>
    );
};

export default SignIn;
