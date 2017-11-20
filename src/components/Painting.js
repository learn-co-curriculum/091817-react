import React from 'react';

const Painting = props => {
  return (
    <div className="item">
      <div className="ui small image">
        <img src={props.image} />
      </div>
      <div className="middle aligned content">
        <div className="header">{`"${props.title}" by ${props.artist}`}</div>
        <div className="description">
          <a onClick={props.handleClick}>
            <i className="large caret up icon" />
            {props.votes} votes
          </a>
        </div>
      </div>
    </div>
  );
};

export default Painting;
