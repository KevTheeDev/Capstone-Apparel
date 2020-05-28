import React, { Component } from 'react';
import NavbarMenu from "./components/NavbarMenu";
import { Route, BrowserRouter as Router} from 'react-router-dom';
import './App.css';

import HomePage from './components/HomePage';
import About from './components/About';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = { 

     };
  }
  render() {
    return (
      <Router>

        <div className="App">
        
        <div>
          <NavbarMenu />

          <Route exact path="/" component={HomePage}/> 
          <Route exact path="/About" component={About} />
        </div>
      
      </div>

      </Router>
    );
  }
}

export default App;
