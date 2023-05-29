import React from 'react'
import { Link } from 'react-router-dom'

import '../App.css'

export default function SignUpPage() {

    const [first_name, setFirstName] = React.useState("");
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");

    const handleSignUp = (e) => {
        e.preventDefault();

        const emailRegex = /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/;
        if (!emailRegex.test(email)) {
            alert("Invalid email address");
            return;
        }

        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
        if (!passwordRegex.test(password)) {
            alert("Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter and one number");
            return;
        }

        const data = {
            first_name: first_name,
            email: email,
            password: password
        }

        const users = JSON.parse(localStorage.getItem('users')) || [];
        users.push(data);
        localStorage.setItem('users', JSON.stringify(users));

        JSON.stringify(data);
        console.log(data);
    }

        

    return (
        <div className="text-center m-5-auto">
            <h2>Join us</h2>
            <h5>Create your personal account</h5>
            <form action="/register">
                <p>
                    <label>Username</label><br/>
                    <input type="text" name="first_name" 
                    onChange={e => setFirstName(e.target.value)}
                    required />
                </p>
                <p>
                    <label>Email address</label><br/>
                    <input type="email" name="email" 
                    onChange={e => setEmail(e.target.value)}
                    required />
                </p>
                <p>
                    <label>Password</label><br/>
                    <input type="password" name="password" 
                    onChange={e => setPassword(e.target.value)}
                    required />
                </p>

                <p>
                    <button id="sub_btn" type="submit" onSubmit={handleSignUp}>Register</button>
                </p>
            </form>
            <footer>
                <p><Link to="/">Back to Homepage</Link>.</p>
            </footer>
        </div>
    )

}
