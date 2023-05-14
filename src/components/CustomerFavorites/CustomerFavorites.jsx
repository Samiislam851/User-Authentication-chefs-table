import React, { useState } from 'react';
import './CustomerFavorite.css';

const CustomerFavorites = ({ food }) => {
    const backgroundImageUrl = food.image;
    const divStyle = {
        backgroundImage: `url(${backgroundImageUrl})`,
    };



    return (
        <div className='col-12 col-md-4 '>
            
            <div
                style={divStyle}
                className='hover-effect m-3 rounded position-relative'
            >
                <h3 className='text-white position-absolute rounded-end  bottom-0 bg-opacity-75 pb-1 fs-5 fw-light bg-danger px-2'>{food.name}</h3>
            </div>
        </div>
    );
};

export default CustomerFavorites;