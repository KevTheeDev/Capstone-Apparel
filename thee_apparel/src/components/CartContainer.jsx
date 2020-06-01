import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import  '../styles/CartContainers.css'

class CartContainer extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            cart: []
         };
    }

    render() {

        let array = {
            food: "good",
            good: "food"
        }


        return (
            <div>
 
            </div>
        );
    }
}

export default CartContainer;