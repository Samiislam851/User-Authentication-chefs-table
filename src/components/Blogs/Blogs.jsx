import React from 'react';
import ReactPrint from 'react-to-print';

import { useRef } from 'react';

const Blogs = () => {
  const ref = useRef();

  const uncontrolledComponent = `Uncontrolled components are components where the form data is handled by the DOM itself. They give users less control over the form data and rely on user input. On the other hand, controlled components are components where the form data is controlled by React. They allow us to have more control over the form data, validate it, and perform actions based on user input.`;

  // Question 2: How to validate React props using PropTypes
  const propTypes = `When it comes to validating React props, PropTypes comes to the rescue. They allow us to specify the expected types of our props, giving users a way to ensure that the correct data types are passed to our components. This helps in catching bugs early and providing clear documentation for the expected prop types.`;

  // Question 3: Difference between Node.js and Express.js
  const nodeExpressDifference = `Node.js is a runtime environment that allows us to run JavaScript code outside of a web browser. It provides the foundation for building server-side applications. On the other hand, Express.js is a web application framework built on top of Node.js. It provides us with a set of features and tools to simplify the process of building web applications, making it easier for users to handle routing, middleware, and other web-related functionalities.`;

  // Question 4: What is a custom hook, and why would you create a custom hook?
  const customHook = `A custom hook is a reusable JavaScript function that starts with the "use" prefix and allows users to share stateful logic between different components. They enable us to extract common functionality into custom hooks, reducing code duplication and making our code more modular and reusable. Custom hooks are particularly useful when we find ourselves repeating the same logic in multiple components, allowing us to extract that logic into a custom hook and share it across our application.`;



  return (
    <div >
      <div className="container mb-5 pb-5">
        <ReactPrint trigger={() => <button className="btn btn-warning text-white float-end">Print/PDF</button>} content={() => ref.current} ></ ReactPrint>
        <div ref={ref} style={{ width: '100%', marginLeft: '' }} className="wrapper">
          <h1 className="my-4 display-5 mx-md-5 text-center text-md-start">Blogs</h1>

          <div className="card mb-4 mx-md-5">
            <div className="card-body p-4 px-5">
              <h5 className="card-title fw-normal fs-4">Question 1: Differences between uncontrolled and controlled components</h5>
              <p className="card-text">{uncontrolledComponent}</p>
            </div>
          </div>

          <div className="card mb-4 mx-md-5">
            <div className="card-body p-4 px-5">
              <h5 className="card-title fw-normal fs-4">Question 2: How to validate React props using PropTypes</h5>
              <p className="card-text">{propTypes}</p>
            </div>
          </div>

          <div className="card mb-4 mx-md-5">
            <div className="card-body p-4 px-5">
              <h5 className="card-title fw-normal fs-4">Question 3: Difference between Node.js and Express.js</h5>
              <p className="card-text">{nodeExpressDifference}</p>
            </div>
          </div>

          <div className="card mb-4 mx-md-5">
            <div className="card-body p-4 px-5">
              <h5 className="card-title fw-normal fs-4">Question 4: What is a custom hook and why create one</h5>
              <p className="card-text">{customHook}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blogs;