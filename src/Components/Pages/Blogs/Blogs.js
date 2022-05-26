import React from 'react';

const Blogs = () => {
    return (
        <div className='grid grid-cols-1 lg:grid-cols-2 mx-20 my-10'>
            <div className='px-5'>
                <h1 className="text-2xl font-bold py-5">How will you improve the performance of a React Application?</h1>
                <h1 className="text-xl font-bold">Ans: </h1>
                1. Keeping component state local where necessary. <br />
                2. Memoizing React components to prevent unnecessary re-renders. <br />
                3. Code-splitting in React using dynamic import. <br />
                4. Windowing or list virtualization in React. <br />
                5. Lazy loading images in React. <br />
            </div>
            <div className='px-5'>
                <h1 className="text-2xl font-bold py-5">How does prototypical inheritance work</h1>
                <p>
                    <b>Ans:</b> Every object with its methods and properties contains an internal and hidden property known as <b>Prototype</b>. The Prototypal Inheritance is a feature in javascript used to add methods and properties in objects. It is a method by which an object can inherit the properties and methods of another object. Traditionally, in order to get and set the <b>Prototype</b> of an object, we use Object.getPrototypeOf and Object.setPrototypeOf. Nowadays, in modern language, it is being set using <b>__proto__.</b>
                </p>
            </div>
            <div className='px-5'>
                <h1 className="text-2xl font-bold py-5">What is a unit test? Why should we write unit tests?</h1>
                <p>
                    <b>Ans:</b> Unit testing involves testing individual components of the software program or application. The main purpose behind this is to check that all the individual parts are working as intended. A unit is known as the smallest possible component of software that can be tested. Unit testing ensures that all code meets quality standards before it's deployed. This ensures a reliable engineering environment where quality is paramount. Over the course of the product development life cycle, unit testing saves time and money, and helps developers write better code, more efficiently.
                </p>
            </div>
            <div className='px-5'>
                <h1 className="text-2xl font-bold py-5">What are the different ways to manage a state in a React application?</h1>
                <p>
                    <b>Ans:</b> There are mainly 5 types of application state in react. They are : <br />
                    1. Communication State <br />
                    2. Data State  <br />
                    3. Control State <br />
                    4. Session State <br />
                    5. Location State <br />
                </p>
            </div>

        </div>
    );
};

export default Blogs;