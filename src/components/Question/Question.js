import React from 'react';

const Question = () => {
    return (
        <div>
            <div className='p-5'>
            <h1>1.how does react work</h1>
            <p>ReactJS divides the UI into isolated reusable pieces of code known as components. React components work similarly to JavaScript functions as they accept arbitrary inputs called properties or props. It's possible to have as many components as necessary without cluttering your code.</p>
            </div>
            <div className='p-5'>
            <h1>2.props vs state in react</h1>
            <p>Props are used to pass data from one component to another. The state is a local data storage that is local to the component only and cannot be passed to other components. The this. setState property is used to update the state values in the component</p>
            </div>
            <div className='p-5'>
            <h1>3.use effect load data bada ar ki ki kaja laga?</h1>
            <p>PThis snippet is based on the counter example from the previous page, but we added a new feature to it: we set the document title to a custom message including the number of clicks.Data fetching, setting up a subscription, and manually changing the DOM in React components are all examples of side effects. Whether or not you’re used to calling these operations “side effects” (or just “effects”), you’ve likely performed them in your components before.</p>
            </div>
        </div>
    );
};

export default Question;