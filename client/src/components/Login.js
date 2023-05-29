import React from 'react'
import { Link } from 'react-router-dom'

import '../App.css'

export default function SignInPage() {
    const [username, setUsername] = React.useState("");
    const [password, setPassword] = React.useState("");

    const handleLogin = (e) => {
        e.preventDefault();

        const data = {
            username: username,
            password: password
        }

        JSON.stringify(data);
        console.log(data);

        const name = document.getElementById("login");
        name.innerHTML = username;
    }


    return (
        <div className="text-center m-5-auto">
            <h2>Sign in to us</h2>
            <form action="/">
                <p>
                    <label>Username or email address</label><br/>
                    <input type="text" name="first_name" className="username" onChange={e => setUsername(e.target.value)} required />
                </p>
                <p>
                    <label>Password</label>
                    <Link to="/forget-password"><label className="right-label">Forget password?</label></Link>
                    <br/>
                    <input type="password" name="password" className="password1" onChange={e => setPassword(e.target.value)} required />
                </p>
                <p>
                    <button id="sub_btn" type="submit" className="sub_btn" onSubmit={handleLogin}>Login</button>
                </p>
            </form>
            <footer>
                <p>First time? <Link to="/register">Create an account</Link>.</p>
                <p><Link to="/">Back to Homepage</Link>.</p>
            </footer>
        </div>
    )
}
