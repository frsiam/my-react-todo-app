import React from 'react';
import { useSendEmailVerification } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';

const EmailVerification = () => {
    const [sendEmailVerification] = useSendEmailVerification(auth);
    return (
        <div className='container text-center mx-auto min-h-screen'>
            <h1 className='text-danger text-xl my-3'>Your Email is Not verified</h1>
            <h1 className='text-primary my-3 text-xl'>Please verify your email address.</h1>
            <button
                className='btn btn-success rounded-0 my-4'
                onClick={async () => {
                    await sendEmailVerification();
                    toast('Sent email !! Please Check Your email');
                }}
            >
                Send Email verification again
            </button>
        </div>
    );
};

export default EmailVerification;