import React from 'react';
import { Link } from 'react-router-dom';
import { SlLike } from 'react-icons/sl';
import { BsArrowRightCircle } from 'react-icons/bs';
import './Chef.css'




const Chef = ({ chef }) => {
    return (
        <div className='col-12 hover-card'>

            <div className=" my-4 mx-3 d-flex flex-column-reverse flex-md-row justify-content-center align-items-center gap-3 border" style={{ width: '' }}>

                <div className="p-4 w-100" >
                    <h5 className=" display-6 ">{chef.name}</h5>
                    <div className="ps-2 fw-semibold text-black-50">Years of Experience : {chef.years_of_experience}+</div>
                    <div className="ps-2 fw-semibold text-black-50">Special Recipes : {chef.recipes.length}</div>
                    <div className="ps-2 fw-semibold text-black-50"> <SlLike className='pb-1' /> {chef.likes}</div>


                    <Link to={`/chef-details/${chef.id}`} className="text-warning ps-2">View Recipes <BsArrowRightCircle className='pb-1 fs-4' /></Link>
                </div>
                <div className='w-100 h-100' >
             
                        <img src={chef.image} className="w-100 h-100" alt="..." />
                  


                </div>

            </div>
        </div>
    );
};

export default Chef;