import React from 'react';
// @ts-ignore
import '../styles/HomePage.css'
import '../styles/HomePage.scss';

function HomePage() {
        return (
            <div className="homepage">
            <div id="main-div-home-page"> 
            <h1 id="h1-home-page"></h1>
            <h2 id="h2-home-page"></h2>
            <p  id="p-home-page"></p>
            </div>
                <p className="homepage-paragraph"> Clothes For The Comfortable Stage of Life </p>

                <p id="firstpg-paragraph"> ...comfort of dad / mom jeans with the "hipness" of modern times. Express yourself, through various styles, just a little, you deserve it! </p>

                <div id="btm-btn">
                    <p> add icon </p>
                </div>

                <div> 
                    <img className="counter-img" alt="bkgrnd-img" width="500" height="600"/>
                    <p className="product-description"></p>
                </div>
            </div>
        );
}
export default HomePage;