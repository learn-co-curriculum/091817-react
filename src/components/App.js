import React from 'react';
import Navbar from './Navbar';
import PaintingsList from './PaintingsList';

const App = () => {
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
};

export default App;
