import React from 'react';
import { useHistory, useLocation } from 'react-router';
import useAuth from '../../hooks/useAuth';


const Login = () => {
    const { signInUsingGoolge } = useAuth();
    const location = useLocation();
    const redirect = location.state?.from || "/home";
    const history = useHistory();

    const manageRedirect = () => {
        signInUsingGoolge()
            .then(() => {
                history.push(redirect)
            })
    }

    return (
        <div>
            <button onClick={manageRedirect}>Google Sign In</button>
        </div>
    );
};

export default Login;