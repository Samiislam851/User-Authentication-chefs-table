import { Rating } from '@mui/material';
import React, { useState } from 'react';
import { AiOutlineStar,AiFillStar } from 'react-icons/ai';
import { ToastContainer, toast } from 'react-toastify';

const Recipe = ({ recipe }) => {
    const [favorite, setFavorite] = useState(false);
 
    const favoriteFunc = () => {
        setFavorite(!favorite);
        toast('This recipe is marked as your favorite');
    }
    return (
        <div className='col-12 col-md-6'>
            <div className="card m-3" style={{ width: 'auto', height: '' }}>
                <img src={recipe.image} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{recipe.name}</h5>
                    <div >
                        <span className='text-black opacity-75 fw-semibold'> Ingredients : <br /></span>

                        <span className='text-black opacity-50 '>{recipe.ingredients.slice(0, 5).map(i => <span key={i}> {i},</span>)}</span>

                    </div>
                    <div className='my-2'>
                        <span className='text-black opacity-75 fw-semibold'> Cooking Method: <br /></span>
                        <span className='text-black opacity-50 '>{recipe.cooking_method}</span>
                    </div>
                    <div className='d-flex justify-content-between'>
                        <div className='my-2 d-flex justify-content-start align-items-center' >

                            <Rating name="half-rating-read" className='' defaultValue={recipe.rating} precision={0.1} readOnly />
                            <span className='text-black-50'> {recipe.rating}</span>
                        </div>
                        <ToastContainer />
                        <button className='btn border-0' disabled={favorite} onClick={favoriteFunc}> Add to Favorite {favorite?<AiFillStar/>:<AiOutlineStar /> }</button>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Recipe;