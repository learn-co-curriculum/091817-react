import React from 'react';
import Navbar from './Navbar';
import PaintingsList from './PaintingsList';

class App extends React.Component {
  componentWillMount() {
    console.log('Will Mount in App');
  }

  componentDidMount() {
    console.log('Did Mount in App');
  }

  render() {
    console.log('rendering in App');
    return (
      <div>
        <Navbar
          color="green"
          title="Paintrest"
          description="our app"
          icon="paint brush"
        />
        <PaintingsList />
      </div>
    );
  }
}

export default App;
