import React, { useRef } from 'react';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../firebase.init';
import Loading from './Loading';

const Login = () => {
    const navigate = useNavigate();
    const emailRef = useRef('');
    const passwordRef = useRef('');
    const location = useLocation();

    const from = location.state?.from?.pathname || "/";
    let errorElement;

    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);

    if (error) {
        errorElement = <p className='text-danger'>Error: {error?.message}</p>;
    }

    if (loading || sending) {
        return <Loading />
    }

    const handleSubmit = async e => {
        e.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;

        await signInWithEmailAndPassword(email, password);
    }
    if (user) {
        navigate(from, { replace: true });
    }

    const resetPassword = async () => {
        const email = emailRef.current.value;
        if (!email) {
            return toast('Please give a valid email.');
        }
        await sendPasswordResetEmail(email);
        toast('Email sent !! Check Your email')
    }
    return (
        <div className='min-h-screen'>
            <div className='container  mx-auto w-3/4 md:w-1/2 lg:w-2/6 py-5 px-4 md:p-5 bg-emerald-200'>
                <div className='text-center mx-auto'>
                    <h1 className='text-2xl font-semibold'>Login form</h1>
                </div>
                <form className='mt-5 mb-3' onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <input ref={emailRef} type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='Email' />
                    </div>
                    <div className="mb-3">
                        <input ref={passwordRef} type="password" className="form-control" id="exampleInputPassword1" placeholder='Password' />
                    </div>
                    <h1 className='my-3'>{errorElement}</h1>
                    <button className="btn bg-rose-600 font-semibold text-xl text-white rounded-0 w-full">Login</button>
                </form>
                <div className='d-flex justify-between'>
                    <p className='me-2'>Not a Member ? <span onClick={() => navigate('/register')} className='text-primary cursor-pointer font-semibold'>Register</span></p>
                    <p className='ms-2'>Forget Password ? <span onClick={() => resetPassword()} className='text-primary cursor-pointer font-semibold'>Reset</span></p>
                </div>
            </div>
        </div>
    );
};

export default Login;