import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { Link, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import './Login.css'

const Login = () => {
    const { singInUsingGoogle,signInUsingGitHub } = useAuth();
    const location = useLocation();
    const history = useHistory();
    const redirect_uri = location.state?.from || '/home';



    return (
        <div className="login-form my-5">
           
            <Card className="card" style={{ width: '18rem' }}>
            <h1>Please Login</h1>
                <Card.Body>
                    <form >
                        <input type="email" placeholder=" Email" required />
                        <br />
                        <br />
                    
                        <input type="password" name="" id="" placeholder="Password" required />
                        <br />
                        <br />
                        <br />
                        <input className="submitStyle" type="submit" value="Submit" />

                    </form>
                    <p>Are you new?<Link to="/register" className="createStyle"> Create Account </Link></p>

                    <button onClick={singInUsingGoogle} className="btn-regular btnStyle">Google SignIn</button>
                    <button onClick={signInUsingGitHub} className="btn-regular btnStyle">GitHub SingIn</button>
                     
                </Card.Body>
            </Card>
        </div>
    );
};

export default Login;