# 1. React Info Site

## 1.1 Why React?

React code is composable
- Easy component creation and integration

React code is declarative
- "Tell me what to do and I'll get it done"
  - No need to tell it <em>how</em>(imperative)


## 1.2 JSX

React creates JS objects, describing the DOM element we want to put on the page

<p>
Note:
- Make sure you only return a single parent element with JSX
    - e.g. can't render h1 and p with each other (whwen not wrapped by div)
- This is why we use ReactDOM.render instead of the normal JS .append()
- React DOM objects interpreted in a way the browser understands
</p>

<br>

## 1.3 Components

<dl>
<dt>React component<dt>
<dd>function that returns React elements<dd>

<br>

### 1.3.1 Component Conventions

- Use Pascal case instead of camel case (captialise first letter of function identifier)
- Wrap in angle brackets (like HTML element) to call: `<function />`

<br>

### 1.3.2 Parent-Child Components

<br>

### 1.3.3 Organising Components
Steps:
1. Place any component in a separate .js file
2. `import React from "react"` at the top
3. `export default ComponentName` at function declaration OR bottom of file to allow for export
4. `import ComponentName from "./Component.js"` at the top of the index.js file

<br>

## 1.4 Styling with CSS Classes
Steps:
1. Define a className in the HTML element property
2. Create a CSS file and import it into the index.js file
3. Define CSS properties for elements notation:
```
.className {
  property: value;
}
```

<br>

# 2. AirBnB Experiences Clone

## 2.1 Props
Make components reusable
- Pass (object) data into components so it doesn't have to be hard coded every time
- Any type of data whether visible data or metadata

### 2.1.1 Passing in Prop Data

Pass in prop parameters as properties in component call
```
<Component
  prop1=""
  prop2=""
  propn=""
/>
```

<br>

### 2.1.2 Receiving Props

Pass `props` (standard term) as a parameter into the component function declaration

Declaration Example:
```
export default function Component(props) {
  return (
    <div>
      <img src={props.img}/>
      <h1>{props.heading}</h1>
    </div>
  )
}
```

<br>

### Passing Non-String Vales into Props

Use curly brackets to enter in JS data types and structures

Example:
```
<Joke 
  punchline="It’s hard to explain puns to kleptomaniacs because they always take things literally."
  isPun={true}
  upvotes={10}
  downvotes={2}
  comments={[{author: "", body: "", title: ""}]}
/>
```
