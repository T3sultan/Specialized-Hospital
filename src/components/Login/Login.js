import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { Link, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import './Login.css'

const Login = () => {
    const { singInUsingGoogle,
        signInUsingGitHub,
        handleEmailChangeInput,
        handlePasswordChangeInput,
        handleLoginForm,
        signInUsingGoogle

    } = useAuth();
    const location = useLocation();
    const history = useHistory();
    const redirect_uri = location.state?.from || '/home';


    const handleGoogleLogin = () => {
        signInUsingGoogle()
            .then(resutl => {
                history.push(redirect_uri)
            })
    }


    return (
        <div className="login-form my-5">

            <Card className="card" style={{ width: '18rem' }}>
                <h1 className='title'>Please Login</h1>
                <Card.Body>
                    <form onSubmit={handleLoginForm}>
                        <input onChange={handleEmailChangeInput} type="email" placeholder=" Email" required />
                        <br />
                        <br />

                        <input onChange={handlePasswordChangeInput} type="password" name="" id="" placeholder="Password" required />
                        <br />
                        <br />
                        <br />
                        <input className="submitStyle" type="submit" value="Submit" />

                    </form>
                    <p>Are you new?<Link to="/register" className="createStyle"> Create Account </Link></p>

                    <button onClick={handleGoogleLogin} className="btn-regular btnStyle">Google SignIn</button>
                    <button onClick={signInUsingGitHub} className="btn-regular btnStyle">GitHub SingIn</button>

                </Card.Body>
            </Card>
        </div>
    );
};

export default Login;