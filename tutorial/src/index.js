import React from 'react';
import ReactDOM from 'react-dom';

function Greeting() {
  return (
    <div>
      <Person />
      <Message />
    </div>)
}

const Person = () => {
  return <h2>Nikolay</h2>
}
const Message = () => {
  return <p>and his message</p>;
}

ReactDOM.render(<Greeting />, document.getElementById('root'));