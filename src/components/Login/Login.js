import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { Link, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import './Login.css'

const Login = () => {
    const { 
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
                        <div className="row">
                            <label htmlFor="inputEmail3" className="col-sm-2 col-form-label"></label>
                            <div className="col-sm-10">
                                <input onChange={handleEmailChangeInput} type="email" className="form-control" id="inputEmail3" placeholder="Enter your email" required />
                            </div>
                        </div>
                        <br />
                        <div className="row ">
                            <label htmlFor="inputPassword3" className="col-sm-2 col-form-label"> </label>
                            <div className="col-sm-10">
                                <input onChange={handlePasswordChangeInput} type="password" className="form-control" id="inputPassword3" placeholder="Enter your password" required />
                            </div>
                        </div>

                        <br />

                        <div className=" ">
                            <button type="submit" className="btn btn-info btnStyle1">Login</button>

                        </div>

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