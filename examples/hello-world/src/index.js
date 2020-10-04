import React from 'react';
import ReactDOM from 'react-dom';

function HelloWorld() {
  return React.createElement('h1', {}, 'Hi Folks')
}

const container = document.getElementById('root');

ReactDOM.render(React.createElement(HelloWorld), container);
