import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import bgImage from '../../images/wickedbackground.png';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import SocialLogin from './SocialLogin';
import Loading from '../Loading/Loading';
import { toast } from 'react-toastify';

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

    if (loading || updating) {
        return <Loading />
    }

    const handleRegister = async e => {
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        const confirmpassword = e.target.confirmpassword.value;
        if (password !== confirmpassword) {
            toast('Password can not matched !');
            // toast('Password can not matched !');
            return;
        }
        await createUserWithEmailAndPassword(email, password);
        await updateProfile({ displayName: name })
    }

    if (user) {
        navigate('/home');
    }

    return (
        <div className='bg-image min-h-screen' style={{ backgroundImage: `url(${bgImage})` }}>
            <div className='container mx-auto w-3/4 md:w-1/2 lg:w-2/6 py-5 px-4 bg-emerald-200'>
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
                    <button disabled={!terms} className="btn bg-purple-800 font-semibold text-xl text-white rounded-0 w-full">Register</button>
                </form>
                <p>Already Member ? <span onClick={() => navigate('/login')} className='text-primary cursor-pointer font-semibold'>Please Login</span></p>
            </div>
        </div>
    );
};

export default Register;