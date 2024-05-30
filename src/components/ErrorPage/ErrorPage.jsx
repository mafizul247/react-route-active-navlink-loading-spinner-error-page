import React from 'react';
import { Link, useNavigate, useRouteError } from 'react-router-dom';

const ErrorPage = () => {
    const error = useRouteError();
    const navigate = useNavigate();
    return (
        <div>
            <div style={{ height: '100vh' }}>
                <div className='text-center'>
                    <img src="https://img.freepik.com/free-vector/oops-404-error-with-broken-robot-concept-illustration_114360-1932.jpg" alt="ErrorPage" />
                    <p>Sorry, an unexpected error has occurred.</p>
                    <p >
                        <i>{error.statusText || error.message}</i>
                    </p>
                    <Link to='/'><button >Go to Home Page</button></Link>
                    <button onClick={() => navigate(-1)}>Go Back</button>
                </div>
            </div>
        </div>
    );
};

export default ErrorPage;