import app from '../../firebase';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';

const SignUp = () => {
    const handleSignUp = async (event) => {
        event.preventDefault();
        const { email, password } = event.target.elements;
        const auth = getAuth(app);
        try {
            const user = await createUserWithEmailAndPassword(
                auth,
                email.value,
                password.value
            );
            console.log('user', user);
        } catch (error) {
            alert(error);
        }
    };

    return (
        <form style={{ marginTop: `150px` }} onSubmit={handleSignUp}>
            <div>
                <label>Enter your email:</label>
                <input name="email" type="email" />
            </div>
            <div>
                <label>Enter your password:</label>
                <input type="password" name="password" />
            </div>
            <div>
                <input type="submit" value="Sign up" />
            </div>
        </form>
    );
};

export default SignUp;
