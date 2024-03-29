import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom'
import Home from './pages/Home/Home'
import ShowDetails from './pages/ShowDetails';
// import StyledWrapper from './components/StyledWrapper/StyledWrapper'
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div className="App">
          <Route exact path='/' component={Home} />
          {/* <Route path='/about' component={About} /> */}
          <Route path='/:show_id' component={ShowDetails} />
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
