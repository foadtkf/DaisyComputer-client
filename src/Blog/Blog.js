import React from 'react';
import { Fade } from 'react-reveal';

const Blog = () => {
    return (
        
      <Fade left cascade>
        <div>
<h1 className="text-6xl text-red-600 font-bold my-5">Some questions and answers:</h1>
            <div  className="hover:shadow-red-600 hover:shadow-xl rounded-lg border p-3 m-5">
                <h3><strong>Question 14.1: </strong>How will you improve the performance of a React Application?</h3><hr/>
                <p><strong>Answer: </strong>I will keep component state local where they're necessary. I will memorize react components to prevent unwanted re renders. I will use React pre-optimization techniques. I'll try to understand how react updates it's ui. I will use windowing or list virtualization in react.</p>
            </div>
            <div  className="hover:shadow-red-600 hover:shadow-xl rounded-lg border p-3 m-5">
                <h3><strong>Question 14.2: </strong>What are the different ways to manage a state in a React application?</h3><hr/>
                <p><strong>Answer: </strong>There are four main types of state we need to properly manage in your React apps:

<br/>1. Local state
<br/>2. Global state
<br/>3. Server state
<br/>4. URL state</p>
            </div>
            <div  className="hover:shadow-red-600 hover:shadow-xl rounded-lg border p-3 m-5">
                <h3><strong>Question 14.3: </strong>How does prototypical inheritance work?</h3><hr/>
                <p><strong>Answer: </strong>Every object contains an internal, hidden property called prototype. The protypal inheritance is a feature in javascript which is used to add methods and properties in objects. It is a method by which an object can inherit the properties and methods of another object. Traditionally, in order to get and set the prototype of an object, we use object.getPrototypeOf and Object.</p>
            </div>
            <div  className="hover:shadow-red-600 hover:shadow-xl rounded-lg border p-3 m-5">
                <h3><strong>Question 14.4: </strong>Why you do not set the state directly in React. For example, if you have const [products, setProducts] = useState([]). Why you do not set products = [...] instead, you use the setProducts</h3><hr/>
                <p><strong>Answer: </strong>To track the state of the function in a component.We can easily set the the valu at any time from the UI</p>
            </div>
            <div  className="hover:shadow-red-600 hover:shadow-xl rounded-lg border p-3 m-5">
                <h3><strong>Question 14.5: </strong>You have an array of products. Each product has a name, price, description, etc. How will you implement a search to find products by name?</h3><hr/>
                <p><strong>Answer: </strong>product.find("name")</p>
            </div>
            <div  className="hover:shadow-red-600 hover:shadow-xl rounded-lg border p-3 m-5">
                <h3><strong>Question 14.6: </strong>What is a unit test? Why should write unit tests?</h3><hr/>
                <p><strong>Answer: </strong>Testing the methods and funtions for a given input is unit testing. <br />We should write unit tests for verifying the output of a function or component for a given input.Checking that the component renders correctly for the specified props. Verifying the code runs as exprected</p>
            </div>
        </div>
        </Fade>
    );
};

export default Blog;