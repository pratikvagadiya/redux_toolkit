import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';


function Login() {

    let [data, setData] = useState({ email: "", password: "" })
    const navigate = useNavigate();
    const emailCheck = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{3,4})+$/;

    function handleSubmit(e) {
        e.preventDefault();

        if (!emailCheck.test(data.email)) {
            alert('Please enter valid email')
            return false;
        } else if (data.password.length < 5) {
            alert('Please enter valid password')
            return false
        }
        else {
            alert('you are login')
            localStorage.setItem('data', JSON.stringify(data))
            navigate('/home')
        }
    }

    return (
        <div className='header'>
            <h1>Log In</h1>
            <div className='login_form'>
                <form onSubmit={handleSubmit}>
                    <label>Email:</label>
                    <input
                        type='text'
                        placeholder="Enter email"
                        onChange={(e) => setData({ ...data, email: e.target.value })}
                    />

                    <label>Password:</label>
                    <input
                        type='text'
                        placeholder="Enter password"
                        onChange={(e) => setData({ ...data, password: e.target.value })}
                    />

                    <button type='Submit'>login</button>
                </form>
            </div>
        </div>
    )
}
export default Login;