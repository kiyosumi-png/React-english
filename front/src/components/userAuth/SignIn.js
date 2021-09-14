import { signInWithEmailAndPassword } from 'firebase/auth';

import { auth } from '../../firebase';

const SignIn = () => {
    const handleSignIn = async (event) => {
        event.preventDefault();
        const { email, password } = event.target.elements;

        try {
            signInWithEmailAndPassword(auth, email.value, password.value);
        } catch (error) {
            alert(error);
        }
    };

    return (
        <div>
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
        </div>
    );
};

export default SignIn;
