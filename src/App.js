import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom'
import Header from './components/Header'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Tile from './components/Tile'

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Header />
        <Route exact path='/' component={Home} />
        {/* <Route path='/about' component={About} /> */}
        <Route path='/:show_id' component={Tile} />
      </div>
    </BrowserRouter>
  );
}

export default App;

