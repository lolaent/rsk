import React from 'react';
import ReactDOM from 'react-dom';

const Decorations = (props) => {
  console.log(props);
  return (
    <>
      {props.showMarquee && <marquee>{props.name}</marquee>}
      {props.name === 'earthware' && <img src="https://earthware.co.uk/Content/img/shared/menu-logo-2x.png" alt="earthware" />}
    </>
  );
}

const Greeter = ({name, decorate=false}) => {

  return (
    <>
      <h1>Hello {name}</h1>
      {decorate && <Decorations name={name} showMarquee={true} />}
      <span>{new Date().toString()}</span>
    </>
  )
}

const container = document.getElementById('root');

ReactDOM.render(<Greeter name="earthware" showMarquee={true}/>, container);
