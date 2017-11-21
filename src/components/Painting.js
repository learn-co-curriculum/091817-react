import React from 'react';

const Painting = props => {
  return (
    <div className="item">
      <div className="ui small image">
        <img src={props.painting.image} />
      </div>
      <div className="middle aligned content">
        <div className="header">{`"${props.painting.title}" by ${props.painting
          .artist.name}`}</div>
        <div className="description">
          <a onClick={props.handleVote}>
            <i className="large caret up icon" />
            {props.painting.votes} votes
          </a>
        </div>
        <div className="extra">
          <div onClick={props.handleToggle} className="ui button basic red">
            <i className="trash icon" />
            Delete
          </div>
        </div>
      </div>
    </div>
  );
};

export default Painting;
