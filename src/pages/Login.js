import React, { useEffect, useState } from 'react';
import Logo from '../components/Icons/Logo';
import { signInWithPopup, onAuthStateChanged } from 'firebase/auth';
import { auth, googleProvider } from '../firebase/config';
import { useNavigate } from 'react-router';
import { toast } from 'react-toastify';

const Login = () => {
    const navigate = useNavigate();
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setIsAuthenticated(true);
            } else {
                setIsAuthenticated(false);
            }
        });
        return () => unsubscribe();
    }, []);

    const googleClick = () => {
        signInWithPopup(auth, googleProvider)
            .then(data => {
                localStorage.setItem("token", data.user.refreshToken)
                toast.success("Logged in successfully")
                navigate("/home")
            }).catch((err) => console.log(err))
    }

    const appleClick = () => {
        signInWithPopup(auth, googleProvider)
            .then(data => {
                localStorage.setItem("token", data.user.refreshToken)
                navigate("/home")
            }).catch((err) => toast.success(err.code))
    }

    useEffect(() => {
        if (isAuthenticated) {
            navigate("/home");
        }
    }, [isAuthenticated, navigate]);

    return (
        <div className='row vh-100 justify-content-center align-items-center'>
            <div className='col-md-4 p-5 logo'>
                <Logo />
            </div>
            <div className='col-md-8 p-5'>
                <h1 className='display-3 mb-5 fw-bold'>
                    Şu anda olup <br />bitenler
                </h1>
                <h2 className='mb-4'>Hemen katıl.</h2>

                <div className='login'>
                    <button className='w-100 btn btn-sm btn-light rounded-pill py-2 px-4 mb-3' onClick={googleClick}>Google ile kaydolun</button>
                    <br />
                    <button className='w-100 btn btn-sm btn-light rounded-pill py-2 px-4' onClick={appleClick}>Apple ile kaydol</button>

                    <p className='my-2 text-secondary w-100 text-center'>---- or ----</p>
                    <button className='w-100 btn btn-primary rounded-pill mb-5'>Cretae Account</button>

                    <p className='mt-4'>Don't have an account yet?</p>
                    <button className='w-100 btn btn-sm btn-outline-primary rounded-pill py-2 px-4'>Login</button>
                </div>
            </div>
        </div >
    );
}

export default Login;
