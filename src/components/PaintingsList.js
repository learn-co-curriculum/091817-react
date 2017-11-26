import React from 'react';
import DeleteablePainting from './DeleteablePainting';
import paintings from '../../artworks';

class PaintingsList extends React.Component {
  constructor() {
    super();

    this.state = {
      paintings: []
    };

    this.handleDelete = this.handleDelete.bind(this);
  }

  componentDidMount() {
    fetch('http://localhost:3001/api/v1/paintings/')
      .then(res => res.json())
      .then(data => {
        this.setState({ paintings: data.sort((a, b) => b.votes - a.votes) });
      });
  }

  // shouldComponentUpdate() {
  //   console.log('should C update is called');
  //   return false;
  // }

  handleDelete(id) {
    const updatedState = this.state.paintings.filter(pntg => pntg.id !== id);

    this.setState({ paintings: updatedState });
  }

  handleVote(id) {
    const updatedPaintings = this.state.paintings
      .map(pntg => {
        if (pntg.id === id) {
          return Object.assign({}, pntg, { votes: pntg.votes + 1 });
        } else {
          return pntg;
        }
      })
      .sort((a, b) => b.votes - a.votes);

    this.setState(state => {
      return { paintings: updatedPaintings };
    });
  }

  render() {
    console.log('render in PaintingsList');
    const allPaintings = this.state.paintings.map(pntg => (
      <DeleteablePainting
        key={pntg.id}
        painting={pntg}
        handleVote={this.handleVote.bind(this, pntg.id)}
        handleDelete={this.handleDelete}
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
