import React, { useEffect } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import { AiFillHeart } from 'react-icons/ai';
import FadeIn from "react-lazyload-fadein";

import Recipe from '../Recipe/Recipe';
const ChefDetails = () => {
    const chefs = useLoaderData();
    const { id } = useParams();
    const chef = chefs.find(c => c.id == id);
     
    useEffect(() => {
        window.scrollTo(0, 0); 
      }, []);

    return (
        <div>
            <div className="container my-4 mx-auto d-flex flex-column flex-md-row justify-content-center align-items-center gap-3 " style={{ width: '' }}>
                <div className='w-100' >
                <FadeIn >
            {onload => (
                <img
                src={chef.image}
                    onLoad={onload}
                    className="w-100 rounded"
                    
                />
            )}
        </FadeIn>
           
                
                </div>
                <div className="p-4 w-100" >
                    <h5 className=" display-4 fw-semibold ">{chef.name}</h5>
                    <p className='ps-2 text-dark opacity-75 '>{chef.bio}</p>
                    <div className="ps-2 fw-bold text-black-50"> Experience : {chef.years_of_experience}+Years</div>
                    <div className=''>

                        <div className="ps-2 fw-bold text-black-50">Special Recipes : {chef.recipes.length}</div>
                        <div className="ps-2 fw-semibold text-black-50"> <AiFillHeart className='pb-1 text-danger fs-4' /> {chef.likes}</div>
                    </div>
                </div>
            </div>

            <div className='mb-5 pb-5'>
                <h2 className='display-2 mt-5 pt-5 mb-4 text-center'>Recipes</h2>
                <div className='container'>
                    <div className='row'>
                        {chef.recipes.map(recipe => <Recipe recipe={recipe} key={recipe.id}></Recipe>)}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ChefDetails;