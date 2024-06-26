import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';  //First letter capital-convention (also for component)

function InbuiltComponent(){
    return ( 
    <h1>Hello from inbuilt component</h1>
    )
}

//The object can never be defined here since the html is (expected) & converted to object itself by BABEL transpiler

//Elements are understood
const anotherElement = (
    <a href="https://google.com" target='_blank'>Visit google</a>
);


// To create element in react - sytax
// const ReactElement = {
//     type: 'a',
//     props: {
//         href: 'https://google.com',
//         target: '_blank'
//     },
//     children: 'Click me to visit google'
// }

//Practical example
const reactElement = React.createElement(
    'a',    
    {href:'https://link,com',target: '_blank' },
    'click me to visit google',
    anotherElement
)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <>
    <App />
    <InbuiltComponent />
    {anotherElement} //Elements/Variable passed here
    {reactElement} 
    </>
);
