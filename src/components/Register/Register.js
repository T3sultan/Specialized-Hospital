import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import './Register.css'

const Register = () => {
    const { singInUsingGoogle, signInUsingGitHub } = useAuth();
    return (
        <div className="login-form my-5">

            <Card className="card" style={{ width: '18rem' }}>
                <h1 className="title">Create Account</h1>
                <Card.Body>
                    <form >
                        <input type="text" placeholder=" Email" required />
                        <br />
                        <br />
                        <input type="email" placeholder=" Email" required />
                        <br />
                        <br />

                        <input type="password" name="" id="" placeholder="Password" required />
                        <br />
                        <br />
                        <input type="password" name="" id="" placeholder="confirm password" required />
                        <br />
                        <br />
                        <input className="submitStyle" type="submit" value="Submit" />

                    </form>
                    <p className="convert">Already have an account?<Link to="/login" className="createStyle"> Create Account </Link></p>

                    <button onClick={singInUsingGoogle} className="btn-regular btnStyle">Google SignIn</button>
                    <button onClick={signInUsingGitHub} className="btn-regular btnStyle">GitHub SingIn</button>

                </Card.Body>
            </Card>
        </div>
    );
};

export default Register;