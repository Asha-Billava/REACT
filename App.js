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




HMR (Hot Module Replacement) is a feature in JavaScript bundlers like Webpack that allows you to update modules in a running application without needing a full reload.
How HMR Works
HMR replaces or updates only the specific modules that have changed, instead of reloading the entire page. When you edit and save a file, the bundler:

Detects the changes.
Bundles only the changed module.
Sends the updated module to the browser.
Updates the module in the running app without a full page reload.

React: HMR is often used in combination with tools like React Refresh, allowing components to update in real-time without losing their state.


How Parcel Cache Works
Dependency Tracking:

Parcel has a powerful dependency tracking system that automatically keeps track of which files are related or dependent on each other. When a file is modified, Parcel knows precisely which files need to be rebuilt and which do not, minimizing the amount of work on rebuilds.
Storing Compiled Output:

After each build, Parcel stores the compiled output for every file in the .parcel-cache directory. This cache includes the results of transpiling, minifying, bundling, and other processing steps, allowing Parcel to skip those steps when they haven't changed.
Incremental Caching:

Parcel uses an incremental caching strategy, meaning it only reprocesses files that have changed. When you modify a file, only that file and its dependent files are rebuilt. Everything else is loaded from the cache, which makes rebuilds much faster.
Persistent Disk Cache:

The cache is stored on disk rather than in memory, so it persists between Parcel restarts. This is particularly helpful for large projects because the cache remains even if you close and reopen the project or restart your development environment.

Benefits of Parcel Cache
Faster Builds: By caching processed files, Parcel significantly reduces the time needed for builds, especially on large projects or after multiple changes.
Efficient Rebuilds: Incremental caching allows for quick rebuilds during development since only the modified files and their dependencies are reprocessed.


parcel in dev mode
Development Mode Features
Fast Rebuilds: The primary goal is to provide a quick feedback loop. Changes made in source files are reflected in the browser without requiring full rebuilds.
Source Maps: Parcel generates source maps during development, making it easier to debug the original source files in the browser's developer tools.
Hot Module Replacement (HMR): Parcel supports HMR out of the box, allowing developers to see changes in real time without losing application state.


Production Mode Behavior
When switching to production mode (typically via the parcel build command), Parcel activates several optimizations:

Minification: JavaScript and CSS files are minified to reduce file size.
Compression: Parcel can generate compressed assets for deployment, making it more efficient for serving over the web.
Tree Shaking: Unused code is removed more aggressively, reducing the overall bundle size.
Image Optimization: Images may be optimized, resized, and converted to more efficient formats, helping to decrease loading times.


1. Parcel
File Change Detection:

When you save changes to a file, Parcel's built-in file watcher detects the change.
Dependency Graph Update:

Parcel updates its dependency graph to identify which files are affected by the change. It analyzes the imports/exports in the modified file to see which other files depend on it.
Incremental Build:

Parcel rebuilds only the modified file and its dependencies, rather than the entire project. This process is fast due to its efficient caching system.
Hot Module Replacement (HMR):

If HMR is enabled, Parcel injects the updated module into the running application in the browser without a full reload, preserving the application state.
Re-render:

The updated component or module is re-rendered in the browser, and you see the changes immediately.
2. Webpack
File Change Detection:

When you save a file, Webpack's file watcher (often using Chokidar) detects the change.
Recompilation Trigger:

Webpack triggers a recompilation process. It checks the modified file and its dependencies based on the configuration and the dependency graph.
Build Process:

Webpack processes the updated file through its loaders and plugins, which may include transformations like transpilation, minification, or bundling.
Hot Module Replacement (HMR):

If HMR is enabled, Webpack updates the changed module in the browser without a full page reload, allowing the application to retain its state.
Re-render:

The modified content is re-rendered in the browser, reflecting the changes immediately.
3. Create React App (CRA)
File Change Detection:

When you save a file, CRA’s underlying Webpack configuration detects the change through its file watcher.
Recompilation:

Webpack recompiles the affected file and its dependencies, similar to the standard Webpack process.
Hot Module Replacement (HMR):

CRA utilizes HMR to update the application in the browser without a full reload, keeping the current state of the app intact.
React Fast Refresh:

CRA employs React Fast Refresh for more reliable HMR. It preserves component state and allows for hot reloading of React components, even when they are modified.
Re-render:

The modified component is re-rendered in the browser, allowing you to see the changes immediately.


Stateless Components: These are functional components that do not manage state. They rely entirely on props to render UI.
Stateful Components: Class components (before hooks) or functional components (after hooks) that maintain and manage their own internal state.


Why Functional Components Over Class Components?
Less Boilerplate: Functional components require less setup and are easier to write and understand.
Better Composition: Hooks allow for better code reuse, making it easier to share and manage logic across multiple components.
Cleaner Code: No need to deal with lifecycle methods or this binding.
Functional Programming Paradigm: Promotes a functional programming style, which is more concise and easier to reason about.
Forward Compatibility: With the introduction of hooks, functional components can handle state and side effects, which was previously the domain of class components.



// declarative programm
In declarative programming, you describe what you want to achieve (e.g., render a button, show a list of items), and the system (like React or a database engine) automatically figures out the best way to accomplish that task.


Declarative Example (React):
In React, a declarative approach would look like describing the UI state you want, and React will handle updates automatically based on changes in state or props.
function Counter() {
  const [count, setCount] = useState(0);
  
  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}
..The component describes the UI it wants (a counter with a button).
..React handles how to efficiently update the UI based on state changes (setCount).
..You don’t have to manually tell React how to re-render the component or when to update the DOM.

Imperative Example:
In an imperative style, you might manually control the DOM elements and their updates.
function Counter() {
  let count = 0;

  function increment() {
    count++;
    document.getElementById('count').innerText = count;
  }

  return (
    <div>
      <p id="count">Count: 0</p>
      <button onClick={increment}>Increment</button>
    </div>
  );
}

..You have to manually update the DOM (document.getElementById('count').innerText = count) every time the state changes.
..This approach is more imperative because you are explicitly telling the program how to update the UI based on the changes in the count variable.



Componet composition
1. Basic Composition:
A parent component can pass props to child components, allowing for customization and composition.

2. Higher-order Components (HOCs) for Composition:

3. Composition with Render Props:
Another way to compose components is through render props, which allows passing a function as a prop to a component that controls how part of the UI is rendered.

^1.2.3 (Caret)
Allows updates that do not change the leftmost non-zero digit.
This means the version range specified is compatible with any future minor or patch versions within the same major version.
For ^1.2.3, the allowed version range is >=1.2.3 and <2.0.0.
Example:
^1.2.3 can include versions like 1.2.4, 1.3.0, 1.9.9, etc., but not 2.0.0 or above.
~1.2.3 (Tilde)
Allows updates for the patch version, but not the minor version.
This means the version range specified allows updates to patch versions while keeping the same minor version.
For ~1.2.3, the allowed version range is >=1.2.3 and <1.3.0.
Example:
~1.2.3 can include versions like 1.2.4, 1.2.5, 1.2.99, etc., but not 1.3.0 or above.
Summary:
^ (Caret): More flexible, allows updates to any minor or patch versions within the same major version (e.g., ^1.2.3 allows 1.3.0 but not 2.0.0).
~ (Tilde): More restrictive, only allows updates to patch versions within the same minor version (e.g., ~1.2.3 allows 1.2.4 but not 1.3.0).
Use Case:

^ is typically used when you want to keep up with new features and fixes in the same major version.
~ is used when you want stricter control, only allowing patch updates for stability reasons.

*/
