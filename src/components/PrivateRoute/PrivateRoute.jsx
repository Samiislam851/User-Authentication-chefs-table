import React, { useContext } from 'react';
import { AuthContext } from '../AuthProvider/AuthProvider';
import { Navigate, useLocation, useNavigate } from 'react-router-dom';
import { Spinner } from 'react-bootstrap';

const PrivateRoute = ({ children }) => {
    const navigate = useNavigate();
    const { user, loading, setLoading } = useContext(AuthContext);
    const location = useLocation();

    /////////// To prevent auto redirecting to form while refreshing/////////////// 

    if (loading) {
        return <div className="d-flex justify-content-center align-items-center my-5 py-5">
            <Spinner animation="border" role="status">
                <span className="visually-hidden">Loading...</span>
            </Spinner >
        </div>
    }


    if (user) {
        return (
            children

        );
    }
    else {
        return (
            <Navigate to='/login' state={location} replace></Navigate>
        )
    }

};

export default PrivateRoute;