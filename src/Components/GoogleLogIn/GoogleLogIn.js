import React from 'react';
import { useHistory, useLocation } from 'react-router';
import useAuth from '../../Hook/useAuth';

const GoogleLogIn = () => {
    const { logInUsingGoogle, setUser } = useAuth();
    const location = useLocation();
    const history = useHistory();
    const redirect = location.state?.from || '/home';

    const handleGoogleLogIn = () => {
        logInUsingGoogle()
        .then((result) => {
            const user = result.user;
            setUser(user);
            history.push(redirect);
        })
    }
    return (
        <div>
            <h1 className="text-center text-cyan m-5 p-5" >Log In</h1>
            <div className="text-center" style={{marginBottom: "20%"}}>
            <button onClick={handleGoogleLogIn} className="button">Log In via Google</button>
            </div>
        </div>
    );
};

export default GoogleLogIn;