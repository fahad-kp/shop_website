import React from 'react';
import Header from './components/Header';
import Item from './components/Item';
import './common.scss';

function App() {
  const names =['image1.png', 'image2.png', 'image3.png', 'image4.png', 'image3.png', 'image4.png', 'image2.png', 'image1.png']
  return (
    <div className="App">
      <Header/>
      <div className="container">
        {names.map(name => (
          <Item name={name}/>
        ))}
      </div>
    </div>
  );
}

export default App;
