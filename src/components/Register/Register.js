import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import './Register.css'
import { useLocation, useHistory } from 'react-router-dom';


const Register = () => {
    const {
        signInUsingGitHub,
        handleRegisterForm,
        handleEmailChangeInput,
        handlePasswordChangeInput,
        signInUsingGoogle,
        handleNameChange,
     
    } = useAuth();
    const history = useHistory();
    const location = useLocation();

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
                <h1 className="title">Create Account</h1>
                <Card.Body>
                    <form onSubmit={handleRegisterForm}>
                        <div className="row mb-3">
                            <label htmlFor="name" className="col-sm-2 col-form-label"></label>
                            <div className="col-sm-10">
                                <input onChange={handleNameChange} type="text" className="form-control" id="name" placeholder="Enter your name" />
                            </div>
                        </div>

                        <div className="row mb-3">
                            <label htmlFor="inputEmail3" className="col-sm-2 col-form-label"></label>
                            <div className="col-sm-10">
                                <input onChange={handleEmailChangeInput} type="email" className="form-control" id="inputEmail3" placeholder="Enter your email" required />
                            </div>
                        </div>
                        <div className="row mb-3">
                            <label htmlFor="inputPassword3" className="col-sm-2 col-form-label"> </label>
                            <div className="col-sm-10">
                                <input onChange={handlePasswordChangeInput} type="password" className="form-control" id="inputPassword3" placeholder="Enter your password" required />
                            </div>
                        </div>
                        
                        <div className="row g-3 btn12">
                            <div className="">
                                <button type="submit" className="btn btn-info btnStyle">Register</button>

                            </div>
                        </div>

                    </form>
                    <p className="convert">Already have an account?<Link to="/login" className="createStyle"> Create Account </Link></p>

                    <button onClick={handleGoogleLogin} className="btn-regular btnStyle">Google SignIn</button>
                    <button onClick={signInUsingGitHub} className="btn-regular btnStyle">GitHub SingIn</button>

                </Card.Body>
            </Card>
        </div>
    );
};

export default Register;