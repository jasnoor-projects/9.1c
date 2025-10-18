
import React, { useState, } from 'react';
import { signOut } from 'firebase/auth'; // Correct import
import { auth } from './firebase';
import { useNavigate } from 'react-router-dom';
import "./sign-out.css";
import Header from "./Header";

function Signout() {
    const [isAuth, setIsAuth] = useState(false);
    const navigate = useNavigate(); // Initialize useNavigate

    const handleSignout = () => {
        signOut(auth).then(() => {
            localStorage.clear();
            setIsAuth(false);
            alert('You are Successfully Logged Out!! :D');
            navigate('/');

        });
    };

    return (
        <div>
            <Header />
            <div className="con">
                
                <a>WELCOME TO THE APP!!</a>
                <button onClick={handleSignout}>Sign Out</button> {/* Use handleSignout, not signOut */}
            </div>
        </div>

    );
}

export default Signout