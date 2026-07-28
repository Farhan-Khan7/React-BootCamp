const { createElement } = require("react")()

let h1 = document.createElement("h1");
h1.textContent = "Create Element with the help of DOM"

document.querySelector("body").append(h1);


let root = document.querySelector("#root");


console.log("Real DOM  = ", h1)
console.log("Virtual DOM  = ", reactElem)

let rootOfReact = ReactDOM.createRoot(root).render(reactElem)


let reactElem = React.createElement("div" , {className : "react-h1"}, React.createElement("h1" , null , createElement("span", null , "I am span")))