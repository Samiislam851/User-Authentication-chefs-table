import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import AuthProvider, { AuthContext } from '../AuthProvider/AuthProvider';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { BsGoogle, BsGithub } from 'react-icons/bs';



const SignUp = () => {

    const location = useLocation();

    const navigate = useNavigate();
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [error, setError] = useState(null);


    const { signUpUser, setUser, user, updateUserProfile, gitHubLogin, googleLogin } = useContext(AuthContext);
    const passCheck = (event) => {
        setPassword(event.target.value);
        if (password.length > 5) {
            setError(null);
        }
    }
    const emailCheck = (event) => {
        setEmail(event.target.value);
        if (password.length > 5) {
            setError(null);
        }
    }
    const handleSignUp = (event) => {
        event.preventDefault();
        const form = event.target;
        const url = form.url.value;
        if (email == '' || password == '') {
            toast('Email or Password field can not be empty');
            return;
        }

        if (password.length < 6) {
            setError('password must be at least 6 characters long');
            return;
        }

        signUpUser(email, password).then(result => {
            form.reset();
            updateUserProfile(name, url).then(setUser(result.user)).catch(error => console.log(error));

        }).catch(error => {
            if (error.message === 'Firebase: Error (auth/email-already-in-use).') {
                setError('The email address is already in use.');
            } else {
                setError('An error occurred while signing up. Please try again later.');
            }
        });
        navigate(location?.state || '/');

    }


    const [ischecked, setIschecked] = useState(false);
    const checkHandle = () => {
        setIschecked(!ischecked);

    }
    const handleGoogleLogin = () => {
        googleLogin().then((result) => {
            // This gives you a Google Access Token. You can use it to access the Google API.
            const credential = GoogleAuthProvider.credentialFromResult(result);
            const token = credential.accessToken;
            // The signed-in user info.
            setUser(result.user);
            navigate(location?.state || '/');
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
            // This gives you a GitHub Access Token. You can use it to access the GitHub API.
            const credential = GithubAuthProvider.credentialFromResult(result);
            const token = credential.accessToken;

            // The signed-in user info.
            setUser(result.user);
            navigate(location?.state || '/');
        }).catch((error) => {
            // Handle Errors here.
            const errorCode = error.code;
            const errorMessage = error.message;
            // The email of the user's account used.
            const email = error.customData.email;
            // The AuthCredential type that was used.
            const credential = GithubAuthProvider.credentialFromError(error);
            // ...
        });
    };


    return (<div>
        <div className='row'>
            <h1 className='text-dark opacity-75 text-center  mt-5 '>Sign Up</h1>
            <form onSubmit={handleSignUp} className='col-10 col-md-4 mx-auto py-5' >

                <div className="mb-3">
                    <label className="form-label">Your Name</label>
                    <input className="form-control" onChange={(e) => setName(e.target.value)} aria-label="default input example"></input>


                </div>
                <div className="mb-3">
                    <label className="form-label">Photo url</label>
                    <input className="form-control" type="text" name='url' aria-label="default input example"></input>

                </div>
                <div className="mb-3">
                    <label className="form-label">Email address</label>
                    <input type="email" onChange={emailCheck} name='email' className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div className="mb-3">
                    <label className="form-label">Password</label>
                    <input type="password" onChange={passCheck} name='password' className="form-control" id="exampleInputPassword1" />
                </div>
                <div className="mb-3 form-check">
                    <input type="checkbox" className="form-check-input" id="exampleCheck1" checked={ischecked} onChange={checkHandle} />
                    <label className="form-check-label">Agree to <a href="#" className='text-decoration-none text-primary'>Terms and Conditions</a> </label>
                </div>
                {error ? <div className='text-danger'>{error}</div> : <div></div>}
                <div className='mb-3'>Have an account? <Link to='/login' className='text-primary' >Log In</Link></div>
                <div className='text-center'>
                    <button type="submit" disabled={!ischecked} className="btn btn-success">Sign Up</button>
                </div>

            </form>


            <ToastContainer
                position="bottom-center"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
            />
        </div>
        <div className="text-center d-flex flex-column flex-md-row gap-2 mx-auto mt-3 mb-5" style={{ width: 'fit-content' }}>
            <button onClick={handleGoogleLogin} className="btn btn-outline-danger  mb-3">
                <BsGoogle />   SignUp with Google
            </button>
            <button onClick={handleGitHubLogin} className="btn btn-outline-dark  mb-3">
                <BsGithub /> SignUp with GitHub
            </button>
        </div>
    </div>
    );
};

export default SignUp;