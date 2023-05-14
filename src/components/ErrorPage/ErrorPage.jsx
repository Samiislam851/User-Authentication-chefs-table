import React from 'react';
import { useNavigate } from 'react-router-dom';
import './ErrorPage.css'

const ErrorPage = () => {
    const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1); // Navigate back to the previous page
  };
    return (
        <div className="error-page w-100 ">
      <img src="/errorbg.jpg" className='img-fluid position-absolute top-0' style={{zIndex : '-1',height:'100vh' ,width:'100vw'}} alt="" />
          <div className="col-md-6 mx-auto mt-5 pt-5 text-center position-relative">
            <img src="/not-found.png" className='rounded-4 img-fluid shadow' alt="" />
            {/* <h1 className="display-4">404</h1>
            <h2>Oops! Page Not Found</h2>
            <p className="lead">The page you are looking for does not exist.</p>
            <p className="text-muted">Please check the URL or go back to the previous page.</p> */}
            <button className="btn btn-success position-absolute centered-btm  "onClick={handleGoBack}>Go Back</button>
          
      </div>
    </div>
    );
};

export default ErrorPage;