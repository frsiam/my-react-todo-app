import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
import Loading from './Loading';
import auth from '../firebase.init';

const Register = () => {
    const navigate = useNavigate();
    const [terms, setTerms] = useState(false);

    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
    const [updateProfile, updating, updateError] = useUpdateProfile(auth);
    let errorMessage;

    if (loading || updating) {
        return <Loading />
    }
    if (error) {
        errorMessage = <p className='text-danger'>Error: {error?.message}</p>;
    }

    const handleRegister = async e => {
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        const confirmpassword = e.target.confirmpassword.value;
        if (password !== confirmpassword) {
            toast('Password can not matched !');
            return;
        }
        await createUserWithEmailAndPassword(email, password);
        await updateProfile({ displayName: name })
    }

    if (user) {
        navigate('/home');
    }

    return (
        <div className='bg-image min-h-screen'>
            <div className='container mx-auto w-3/4 md:w-1/2 lg:w-2/6 py-5 px-4 bg-emerald-50'>
                <h1 className='text-2xl text-center mb-4 mt-5 font-semibold'>Please Register</h1>
                <form className='my-3' onSubmit={handleRegister}>
                    <div className="mb-3">
                        <input name='name' type="text" className="form-control" id="exampleInputName1" aria-describedby="emailHelp" placeholder='Your Name' />
                    </div>
                    <div className="mb-3">
                        <input name='email' type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='Email' />
                    </div>
                    <div className="mb-3">
                        <input name='password' type="password" className="form-control" id="exampleInputPassword1" placeholder='Password' />
                    </div>
                    <div className="mb-3">
                        <input name='confirmpassword' type="password" className="form-control" id="exampleInputPassword2" placeholder='Confirm Password' />
                    </div>
                    <div className="mb-3 form-check">
                        <input onClick={() => setTerms(!terms)} type="checkbox" className="form-check-input" id="exampleCheck1" />
                        <label className="form-check-label" htmfor="exampleCheck1">Accepts the all terms and conditions.</label>
                    </div>
                    {errorMessage}
                    <button disabled={!terms} className="btn bg-cyan-500 font-semibold text-xl text-dark rounded-0 w-full">Register</button>
                </form>
                <p>Already Member ? <span onClick={() => navigate('/login')} className='text-primary cursor-pointer font-semibold'>Please Login</span></p>
            </div>
        </div>
    );
};

export default Register;