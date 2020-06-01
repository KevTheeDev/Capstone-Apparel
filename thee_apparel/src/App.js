import React, { Component } from 'react';
import NavbarMenu from "./components/NavbarMenu";
import { Route, BrowserRouter as Router} from 'react-router-dom';
import './App.css';

import HomePage from './components/HomePage';
import About from './components/About';
import TestimonialsContainer from './components/TestimonialsContainer';
import CartContainer from './components/CartContainer';
import ContactPage from './components/ContactPage';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      apparel: " ", 
      decal:" ",
      promos: "",
      isLoading: false,

     };
  }

    
    // const decal = await fetch('decal_api/v1/dec');
    // const bodyDecal = await decal.json();

    
    // const promos = await fetch('promos_api/v1/promo');
    // const bodyPromo = await promos.json();

    // console.log(this.state.apparel)
    // console.log(this.state.decal)
    // console.log(this.state.promos)
  

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

        </div>

        <div className="async">
          

        </div>
      
      </div>

      </Router>
    );
  }
}

export default App;
