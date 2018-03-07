import React from 'react';
import ReactDOM from 'react-dom';

// *** Create a new component. This component should produce some HTML

// const App = function() {
//   return <div>Hi!</div>;
// }

// *** Arrow function
const App = () => {
  return <div>Hi!</div>;
}

// *** http://babeljs.io: with react will be
// var App = function App() {
//   return React.createElement(
//     "div",
//     null,
//     "Hi!"
//   );
// };

// *** Take this component's generated HTML and put it on the page (in the DOM)

// React.render(App);
ReactDOM.render(<App />, document.querySelector('.container'));
