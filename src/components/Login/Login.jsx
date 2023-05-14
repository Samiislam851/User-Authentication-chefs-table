import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../AuthProvider/AuthProvider';
import { BsGoogle, BsGithub } from 'react-icons/bs';

const Login = () => {
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [error, setError] = useState(null);
    const { userLogin, setUser, googleLogin, gitHubLogin, setLoading } = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();


    const handleGoogleLogin = () => {
        googleLogin().then((result) => {
            setUser(result.user);

            navigate(location?.state?.pathname || '/');

        }).catch((error) => {
            // Handle Errors here.
            const errorCode = error.code;
            const errorMessage = error.message;
            // The email of the user's account used.
            const email = error.customData.email;
            // The AuthCredential type that was used.
            const credential = GoogleAuthProvider.credentialFromError(error);
            // ...
        });;
    };

    const handleGitHubLogin = () => {
        gitHubLogin().then((result) => {
     
            setUser(result.user);
            navigate(location?.state?.pathname || '/');
        }).catch((error) => {
        });
    };

    const handleLogin = (event) => {
        setError(null);
        event.preventDefault();
        setError(null);
        const form = event.target;
        const password = form.password.value;
        const email = form.email.value;
        if (password == '' || email == '') {
            setError('Email or Password field can not be empty');
        }
        userLogin(email, password).then(result => {
            setUser(result.user);
            form.reset();
            navigate(location?.state?.pathname || '/');
        }).catch(error => {
            if (error.message === 'Firebase: Error (auth/wrong-password).')
                setError("Email and Password doesn't match")
            else if (error.message === 'Firebase: Error (auth/user-not-found).') {
                setError('User Not found');
            }
            else {
            }

        })

    }
    return (
        <div>
            <div className="row">
                <h1 className="text-dark opacity-75 text-center mt-5">Please Log In</h1>
                <form onSubmit={handleLogin} className="col-10 col-md-4 mx-auto pt-5 pb-2">
                    <div className="mb-3">
                        <label className="form-label">Email address</label>
                        <input
                            type="email"
                            name="email"
                            onChange={(e) => setEmail(e.target.value)}
                            className="form-control"
                            id="exampleInputEmail1"
                            aria-describedby="emailHelp"
                        />
                        <div id="emailHelp" className="form-text">
                            We'll never share your email with anyone else.
                        </div>
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Password</label>
                        <input
                            type="password"
                            onChange={(e) => setPassword(e.target.value)}
                            name="password"
                            className="form-control"
                            id="exampleInputPassword1"
                        />
                    </div>

                    <div className="mb-3">New to chef's table? <Link to="/signup" state={location?.state?.pathname} className="text-primary">Create an account</Link></div>

                    {error && (
                        <div className="text-danger mb-2">{error}</div>
                    )}
                    <div className="text-center">
                        <button type="submit" className="btn btn-success">Log in</button>
                    </div>
                </form>
            </div>
            <div className="text-center d-flex flex-column flex-md-row gap-2 mx-auto mt-3 mb-5" style={{ width: 'fit-content' }}>
                <button onClick={handleGoogleLogin} className="btn btn-outline-danger  mb-3">
                    <BsGoogle />   Login with Google
                </button>
                <button onClick={handleGitHubLogin} className="btn btn-outline-dark  mb-3">
                    <BsGithub />  Login with GitHub
                </button>
            </div>

        </div>
    );
};

export default Login;