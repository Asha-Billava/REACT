import React from "react";
import ReactDOM from "react-dom/client";
// this create element take 3 arguments ----
//1.tag
//2.{} this object is the place where you can give attributes to tag.
//3.whatever we want means text to put inside tag
//creteing element in react
//react createElemnent is a javascript object

const Heading = React.createElement(
  "h1",
  { id: "heading", xyz: "abc" },
  "hello world from react"
);

console.log(Heading); // you will get object

const Parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "this is react"),
    React.createElement("h2", {}, "Im an h2 tag"),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", {}, "Im an h1 tag"),
    React.createElement("h2", {}, "Im an h2 tag"),
  ]),
]);

//we have to tell react, what is root for react, there react can do all dom manipulation
//creating root is a job of React.Dom.
const root = ReactDOM.createRoot(document.getElementById("root"));

//rendering
//root.render(Heading); // this render method is basially converting this create
root.render(Parent);