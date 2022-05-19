import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../firebase.init';

const Header = () => {
    const [user] = useAuthState(auth);

    const handleSignOut = () => {
        signOut(auth);
    }
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container max-w-6xl">
                <Link to='/' className="navbar-brand" href="#"><span className='font-bold text-4xl text-violet-900'>T<span className='text-lime-500'>O</span><span className='text-rose-600'>D<span className='text-cyan-600'>O</span></span></span></Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse flex justify-between" id="navbarNavDropdown">
                    <ul className="navbar-nav">
                        {/* <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Features</a>
                        </li> */}
                    </ul>
                    <ul>
                        <li>
                            <span className='mr-8'>{user && user.displayName}</span>
                            {
                                user && <Link onClick={handleSignOut} to='/login'>Sign Out</Link>
                            }
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Header;