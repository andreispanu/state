import React, {useState} from "react";
import {login, logout} from '../features/authSlice';
import { useAppDispatch, useAppSelector } from "../hooks/hooks";


const Auth = () => {
    const dispatch  = useAppDispatch();
    const {isAuthenticated, user} = useAppSelector((state) => state.auth);

    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');

    const handleLogin = () => {
        if (username && email) {
            dispatch(login({username, email}))
        }
    }

    const handleLogout = () => {
        dispatch(logout());
      };

      return (
        <>
            {isAuthenticated? (
                <div>
                    <h2>Welcome, {user?.username}!</h2>
                    <p>Email: {user?.email}</p>
                    <button onClick={handleLogout}>Logout</button>
              </div>
            ) : (
                <div>
                    <h2>Login</h2>
                    <input
                        type="text"
                        placeholder="Username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                    <input
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <button onClick={handleLogin}>Login</button>
                    </div>
            )}
        </>
      )
}

export default Auth;