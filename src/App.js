import React from 'react';
import './App.css';
import Header from './Header';
import Body from './Body';
import Header2 from './Header2';
import * as ReactBootStrap from 'react-bootstrap';
import Sidebar from './Sidebar';

function App() {
  return (
    <div className="app">

      
      <Header />
      <Header2 />
      <Body />
    </div>
  );
}

export default App;
