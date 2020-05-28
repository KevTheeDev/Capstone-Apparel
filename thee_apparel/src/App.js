import React, { Component } from 'react';
import NavbarMenu from "./components/NavbarMenu";
import { Route, BrowserRouter as Router} from 'react-router-dom';
import './App.css';
import HomePage from './components/HomePage';

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
          <HomePage />

          <Route exact path="/" /> 
          <Route path="/RandomGenerator" />
          <Route exact path="/ThankYouPg" />
          <Route exact path="/RandomGenerator/:id" />
        </div>
      
      </div>

      </Router>
    );
  }
}

export default App;
