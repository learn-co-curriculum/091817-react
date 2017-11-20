import ReactDOM from 'react-dom';
import React from 'react';

const Navbar = props => {
  return (
    <div className={`ui inverted ${props.color} menu`}>
      <a className="item">
        <h2 className="ui header">
          <i className={`${props.icon} icon`} />
          <div className="content">{props.title}</div>
          <div className="sub header">{props.description}</div>
        </h2>
      </a>
    </div>
  );
};

ReactDOM.render(
  <Navbar
    color="grenn"
    title="Paintr"
    icon="paint brush"
    description="wow idk"
  />,
  document.getElementById('main')
);
