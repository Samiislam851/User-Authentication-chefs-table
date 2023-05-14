import React, { useEffect, useState } from 'react';

import { Spinner } from 'react-bootstrap';
import './HomePage.css'
import { useLoaderData } from 'react-router-dom';
import Chef from '../Chef/Chef';
import CustomerFavorites from '../CustomerFavorites/CustomerFavorites';


const HomePage = () => {
  const chefs = useLoaderData();

  const [foods, setFoods] = useState([]);

  useEffect(() => {
    fetch('https://b7a10-chef-recipe-hunter-server-side-samiislam851-samiislam851.vercel.app/foods').then(res => res.json()).then(data => setFoods(data));
  }, []);



  if (!chefs || !foods) {
    return <div className="d-flex justify-content-center align-items-center my-5 py-5">
      <Spinner animation="border" role="status">
        <span className="visually-hidden">Loading...</span>
      </Spinner >
    </div>
  }
  return (
    <div>
      <div className='position-relative ' style={{ maxHeight: 'fit-content' }} >
        <div className=' h-100 w-100' >
          <img src="/headerBanner.jpg" className='img-fluid w-100' style={{}} alt="" />
          <div className="centered text-center">
            <h2 className='text-white fs-3 w-100 display-4'>Discover the vibrant flavors of the Mediterranean on a culinary journey that tantalizes your taste buds.</h2>
          </div>
        </div>
      </div>
    

      <div className='container mx-auto' style={{ marginTop: '100px', width: '90%' }}>
        <h2 className='text-center  display-3'>Meet Our Chefs</h2>
        <div className='row'>
          {chefs.map(chef => <Chef key={chef.id} chef={chef}></Chef>)}
        </div>

      </div>
      <div className='py-5 my-5 container'>
        <h1 className='display-3 text-end'>Customer favorites</h1>
        <hr className='' />
        <div className='row'>
          {foods.map(food => <CustomerFavorites key={food.id} food={food}></CustomerFavorites>)}

        </div>

      </div>
      <div className='container my-5 py-5'>
        
       
       <div className='container d-flex align-items-center justify-content-center flex-column flex-md-row'>
        <div style={{flexBasis:'1/2'}}><img src="/contact.png" className='img-fluid shadow-sm' alt="" /></div>
        <div style={{flexBasis:'1/2'}} className='p-3'>
        <h1 className='display-4 fw-semibold text-start'>Contact Us for Business</h1>
          <p>Order lunch or fuel for work-from-home, late nights in the office, corporate events, client meetings, and much more.</p>
          <button className=' btn btn-warning text-white fw-bold'>Contact now</button>
        </div>
       </div>
      </div>

    </div>
  );
};

export default HomePage;