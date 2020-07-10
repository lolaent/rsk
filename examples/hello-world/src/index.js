import React from 'react';
import ReactDOM from 'react-dom';

const element = React.createElement('h1', {}, 'Hello World');
const container = document.getElementById('root');

ReactDOM.render(element, container);
