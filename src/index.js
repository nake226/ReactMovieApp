import React from 'react';
import ReactDOM from 'react-dom';

// Create a new compoinent.
// The purpose of using JSX is that we can easily make Virtual DOM.
const App = () => {
  return <div>Hi.</div>;
}

// Take this component to Page.
ReactDOM.render(<App />, document.querySelector('.container'));