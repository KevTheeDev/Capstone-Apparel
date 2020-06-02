import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import  '../styles/CartContainers.css'
import ElegantChiffonDress from './assets/ElegantChiffonDress.jpg';
import BrownShoeBLACK from './assets/BrownShoeBLACK.jpg';
import GraphicTeeMuscle from './assets/GraphicTeeMuscle.jpeg';

class CartContainer extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            cart: [ ]
         };
    }

    render() {

        return (
            <div>
                <h2 className="items"> Items </h2>
                <div className="container">
                    <div className="articles">
                        <div>
                            <img src={ ElegantChiffonDress } alt="checkout" className="checkout" />
                        </div>
                        <div>
                            <img src={ BrownShoeBLACK } alt="checkout" className="checkout" />
                        </div>
                        <div>
                            <img src={ GraphicTeeMuscle } alt="checkout" className="checkout" />
                        </div>
                    </div>
                    <h3 className="tit" id="name-brand"> Capstone Apparel </h3>
                    <h4 id="price1"> 10.00</h4>
                    <h4>$</h4>
                </div>

                <div className="inputs">
                    <input type="number" id="quantity1" name="quantity" min="1" max="99" value="1" />
                        <select name="size1" id="size1" >
                            <option value="size" disabled selected>Size</option>
                            <option value="S">S</option>
                            <option value="M">M</option>
                            <option value="XL">XL</option>
                            <option value="XXL">XXL</option>
                        </select>
                        
                    <div>
                        <button className="addTo" >Add To Cart </button>
                    </div>
                </div>
            </div>
        );
    }
}

export default CartContainer;