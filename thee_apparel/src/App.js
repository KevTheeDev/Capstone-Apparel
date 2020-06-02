import React, { Component } from 'react';
import NavbarMenu from "./components/NavbarMenu";
import { Route, BrowserRouter as Router} from 'react-router-dom';
import './App.css';

import HomePage from './components/HomePage';
import About from './components/About';
import TestimonialsContainer from './components/TestimonialsContainer';
import CartContainer from './components/CartContainer';
import ContactPage from './components/ContactPage';
import APIApparel from './components/APIApparel'
import Footer from './components/Footer';


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
          <Route exact path="/TestimonialsContainer" component={TestimonialsContainer} />
          <Route exact path="/CartContainer" component={CartContainer} />
          <Route exact path="/ContactPage" component={ContactPage} />

        <Footer />
        </div>
      
      </div>

      </Router>
    );
  }
}

export default App;
