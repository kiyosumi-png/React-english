import { createUserWithEmailAndPassword } from 'firebase/auth';
import { useHistory } from 'react-router-dom';

import { auth } from '../../firebase';

const SignUp = () => {
    const history = useHistory();

    const handleSignUp = async (event) => {
        event.preventDefault();
        const { email, password } = event.target.elements;
        try {
            await createUserWithEmailAndPassword(
                auth,
                email.value,
                password.value
            );
            history.push('/');
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
