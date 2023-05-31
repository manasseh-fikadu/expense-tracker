import React, {useContext}  from 'react'
import { Link } from 'react-router-dom'
import { GlobalContext } from '../context/GlobalState';
import { useHistory } from 'react-router-dom';
import '../App.css'

export default function SignInPage() {
    const { login } = useContext(GlobalContext);
    const navigator = useHistory(); 
    const handleLogin = (e) => {
        e.preventDefault();
        login();
        navigator.push("/");
    }


    return (
        <div className="text-center m-5-auto">
            <h2>Sign in to us</h2>
            <form action="/" onSubmit={handleLogin}>
                <p>
                    <label>Username or email address</label><br/>
                    <input type="text" name="first_name" className="username" required />
                </p>
                <p>
                    <label>Password</label>
                    <Link to="/forget-password"><label className="right-label">Forget password?</label></Link>
                    <br/>
                    <input type="password" name="password" className="password1" required />
                </p>
                <p>
                    <button id="sub_btn" type="submit" className="sub_btn">Login</button>
                </p>
            </form>
            <footer>
                <p>First time? <Link to="/register">Create an account</Link>.</p>
                <p><Link to="/">Back to Homepage</Link>.</p>
            </footer>
        </div>
    )
}
