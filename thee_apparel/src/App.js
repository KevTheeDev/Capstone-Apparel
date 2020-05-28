import React, { Component } from 'react';
import NavbarMenu from "./components/NavbarMenu";
import { Route, BrowserRouter as Router} from 'react-router-dom';
import './App.css';

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
        Springboot and React App

        <div>
          <NavbarMenu />
        </div>
      </div>

      </Router>
    );
  }
}

export default App;
