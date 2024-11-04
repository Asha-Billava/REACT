import React from "react";
import ReactDOM from "react-dom/client";

// React Element
const jsxHeading = (
  <h5 className="head" tabIndex="1">
    Hi im react
  </h5>
);

console.log(jsxHeading, "DD"); //objects

const elem = <span>im span tag</span>;

//React functional component

const number = 10000;
const Title = function () {
  return (
    <div>
      <h1 className="title">Title Component</h1> <p>{elem}</p>
    </div>
  );
};

const HeadingComponent2 = () => (
  <div id="container">
    <Title />
    <Title></Title>
    {Title()}
    {jsxHeading} {/*putting react elemet*/}
    <h6 className="heading">This is React functional component</h6>
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
//root.render(jsxHeading); // rendering react element
root.render(<HeadingComponent2 />); //rending functional component

/*
//creating element using React element
//const heading = React.createElement("h1", { id: "heading" }, "Namaste React "); //objects
//console.log(heading);

//createing element using JSX
//JSX (transpild before it reaches the JS)=> PARCEL=> Babel
//JSX => React.createElement => reactElement -JS Object=>HTML
const jsxHeading = (
  <h1 className="head" tabIndex="1">
    Hi im react
  </h1> 
);





what is React Component?
everything is component

there arw Two type of component
1. class based component  -OLD way of React => it uses javascript class to write component

2.functional component    -NEW way of React => it uses javascript functions to write component
normal javascript code which returns some piece of JSX element
//React functional component
// const HeadingComponent = () => {
//   return <h1 className="heading">This is React functional component</h1>;
// };


//what is component composition
component inside component , compososing two components in one another
const HeadingComponent2 = () => (
  <div id="container">
    <Title />
    {number} //injecting js  
    {100 + 200}
    {console.log("hi hello")}
    <h6 className="heading">This is React functional component</h6>
  </div>
);

in case if you have melisious api when call in component,  JSX it will prevent cross site scripting for you ,it will not blinding running code 

what makes your code more readable ?
jsx is mading much more reable then react
*/
