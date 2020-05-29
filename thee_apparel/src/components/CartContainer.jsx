import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class CartContainer extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            cart: []
         };
    }
    render() {
        return (
            <div>
                <section className="container content-section">
                    <h2 className="section-header">MUSIC</h2>
                        <div className="shop-items">
                            <div className="shop-item">
                                <span className="shop-item-title">Album 1</span>
                                {/* <img className="shop-item-image" src="Images/Album 1.png"> */}
                                <div className="shop-item-details">
                                    <span className="shop-item-price">$12.99</span>
                                    <button className="btn btn-primary shop-item-button" type="button">ADD TO CART</button>
                                </div>
                            </div>
                

                        <div className="shop-item">
                            <span className="shop-item-title">Album 2</span>
                            {/* <img className="shop-item-image" src="Images/Album 2.png"> */}
                                <div className="shop-item-details">
                                    <span className="shop-item-price">$14.99</span>
                                    <button className="btn btn-primary shop-item-button"type="button">ADD TO CART</button>
                                </div>
                        </div>

                        <div className="shop-item">
                            <span className="shop-item-title">Album 3</span>
                            {/* <img className="shop-item-image" src="Images/Album 3.png"> */}
                                <div className="shop-item-details">
                                <span className="shop-item-price">$9.99</span>
                                <button className="btn btn-primary shop-item-button" type="button">ADD TO CART</button>
                            </div>
                        </div>

                        <div className="shop-item">
                            <span className="shop-item-title">Album 4</span>
                            {/* <img className="shop-item-image" src="Images/Album 4.png"> */}
                            <div className="shop-item-details">
                                <span className="shop-item-price">$19.99</span>
                                <button className="btn btn-primary shop-item-button" type="button">ADD TO CART</button>
                            </div>
                        </div>
                    </div>
                </section>


                <section className="container content-section">
                    <h2 className="section-header">MERCH</h2>
                        <div className="shop-items">
                            <div className="shop-item">
                                <span className="shop-item-title">T-Shirt</span>
                                {/* <img className="shop-item-image" src="Images/Shirt.png"> */}
                                <div className="shop-item-details">
                                    <span className="shop-item-price">$19.99</span>
                                    <button className="btn btn-primary shop-item-button" type="button">ADD TO CART</button>
                                </div>
                            </div>


                        <div className="shop-item">
                            <span className="shop-item-title">Coffee Cup</span>
                            {/* <img className="shop-item-image" src="Images/Cofee.png"> */}
                            <div className="shop-item-details">
                                <span className="shop-item-price">$6.99</span>
                                <button className="btn btn-primary shop-item-button" type="button">ADD TO CART</button>
                            </div>
                        </div>
                    </div>
                </section>



                <section className="container content-section">
                    <h2 className="section-header">CART</h2>
                        <div className="cart-row">
                            <span className="cart-item cart-header cart-column">ITEM</span>
                            <span className="cart-price cart-header cart-column">PRICE</span>
                            <span className="cart-quantity cart-header cart-column">QUANTITY</span>
                        </div>


                    <div className="cart-items">
                        <div className="cart-row">
                            <div className="cart-item cart-column">
                                {/* <img className="cart-item-image" src="Images/Shirt.png" width="100" height="100"> */}
                                <span className="cart-item-title">T-Shirt</span>
                            </div>
                                <span className="cart-price cart-column">$19.99</span>
                                    <div className="cart-quantity cart-column">
                                        <input className="cart-quantity-input" type="number" value="1"></input>
                                        <button className="btn btn-danger" type="button">REMOVE</button>
                                    </div>
                            </div>


                        <div className="cart-row">
                            <div className="cart-item cart-column">
                                {/* <img className="cart-item-image" src="Images/Album 3.png" width="100" height="100"> */}
                                <span className="cart-item-title">Album 3</span>
                            </div>
                            <span className="cart-price cart-column">$9.99</span>
                            <div className="cart-quantity cart-column">
                                <input className="cart-quantity-input" type="number" value="2"></input>
                                <button className="btn btn-danger" type="button">REMOVE</button>
                            </div>
                        </div>
                    </div>

                    <div className="cart-total">
                        <strong className="cart-total-title">Total</strong>
                        <span className="cart-total-price">$39.97</span>
                    </div>
                    <button className="btn btn-primary btn-purchase" type="button">PURCHASE</button>
                </section>


                
                <footer className="main-footer">
                    <div className="container main-footer-container">
                        <h3 className="band-name">The Generics</h3>
                        <ul className="nav footer-nav">
                            <li>
                                <a href="https://www.youtube.com" target="_blank">
                                    {/* <img src="Images/YouTube Logo.png"> */}
                                </a>
                            </li>
                            <li>
                                <a href="https://www.spotify.com" target="_blank">
                                    {/* <img src="Images/Spotify Logo.png"> */}
                                </a>
                            </li>
                            <li>
                                <a href="https://www.facebook.com" target="_blank">
                                    {/* <img src="Images/Facebook Logo.png"> */}
                                </a>
                            </li>
                        </ul>
                    </div>
                </footer>

            </div>
        );
    }
}

export default CartContainer;