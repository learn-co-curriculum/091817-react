import React from 'react';
import Painting from './Painting';
import paintings from '../../artworks';

class PaintingsList extends React.Component {
  constructor() {
    super();

    this.state = {
      paintings: paintings.sort((a, b) => b.votes - a.votes)
    };
  }

  handleVote(id) {
    console.log(id);

    const updatedPaintings = this.state.paintings.map(pntg => {
      if (pntg.id === id) {
        return Object.assign({}, pntg, { votes: pntg.votes + 1 });
      } else {
        return pntg;
      }
    });

    this.setState(state => {
      return { paintings: updatedPaintings };
    });
  }

  render() {
    const allPaintings = this.state.paintings.map(pntg => (
      <Painting
        key={pntg.id}
        id={pntg.id}
        title={pntg.title}
        artist={pntg.artist.name}
        image={pntg.image}
        votes={pntg.votes}
        handleClick={this.handleVote.bind(this, pntg.id)}
      />
    ));
    return (
      <div>
        <h1> All Paintings</h1>
        <div className="ui unstackable items">{allPaintings}</div>
      </div>
    );
  }
}

export default PaintingsList;
