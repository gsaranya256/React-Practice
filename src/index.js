//var React = require("react");
//var ReactDOM = require("react-dom");
//or
// with ES6 Javascript version
import React from "react";
import ReactDOM from "react-dom";

//ReactDOM.render(WHAT TO SharedWorker, WHERE TO SHOW IT)
//Babel is the Javascript compiler in the React package.
//That compiles this plain HTML into a javascript understandable by all machines.

// with react we can inject HTML inside the js code.
ReactDOM.render(
  <div>
    <h1> Hello World!! </h1>
    <p>This is a paragraph</p>
  </div>,
  document.getElementById("root")
);

//or  Plain Javascript code
/*var h1 = document.createElement("h1");
h1.innerHTML = "Hello World!!!";
document.getElementById("root").appendChild(h1);*/
