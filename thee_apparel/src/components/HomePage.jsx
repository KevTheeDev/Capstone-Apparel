import React from 'react';
import whiteDress from './assets/whiteDress.jpg';
import RedDressLoose from './assets/RedDressLoose.jpg';
import JeansDadBlack from './assets/JeansDadBlack.jpg';


import '../styles/HomePage.css'
import '../styles/HomePage.scss';
import APIApparel from './APIApparel.jsx';

function HomePage() {

        return (
            <div className="homepage">
            <div id="main-div-home-page"> 
            <h1 id="h1-home-page"></h1>
            <h2 id="h2-home-page"></h2>
            <p id="p-home-page"></p>

            
            </div>
                <p className="homepage-paragraph"> Clothes For The Comfortable Stage of Life </p>

                <p id="firstpg-paragraph"> ...comfort of dad / mom jeans with the "hipness" of modern times. Express yourself, through various styles, just a little, you deserve it! </p>

                
                <div className="row">
                    <div className="column">
                        <img src={whiteDress} alt="logo" />
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

                    <div className="column">
                        <img src={RedDressLoose} alt="logo" />
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

                    <div className="column">
                        <img src={JeansDadBlack} alt="logo"/>
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
                    <APIApparel/>
            </div>
        );
}
export default HomePage;