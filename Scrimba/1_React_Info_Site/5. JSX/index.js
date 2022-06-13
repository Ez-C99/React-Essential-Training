// Vanilla JS:

const h1 = document.createElement("h1");
h1.textContent = "Hello world";
h1.className = "header";
console.log(h1);

// From above code:
// <h1 class="header"

// JSX:

const element = <h1 className="header">This is JSX</h1>;
console.log(element);

// ReactDOM.render(element, document.getElementById("root"))

/* From above code:
{
    type: "h1", 
    key: null, 
    ref: null, 
    props: {
        className: "header", 
        children: "This is JSX"
    }, 
    _owner: null, 
    _store: {}
}
 */

//React is creating JS objects

// Example page

const page = (
  <div>
    <h1 className="header">This is JSX</h1>
    <p>This is a paragraph</p>
  </div>
);

ReactDOM.render(page, document.getElementById("root"));
