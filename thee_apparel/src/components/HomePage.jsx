import React from 'react';
import whiteDress from './assets/whiteDress.jpg';
import RedDressLoose from './assets/RedDressLoose.jpg';
import JeansDadBlack from './assets/JeansDadBlack.jpg';


import '../styles/HomePage.css'
import '../styles/HomePage.scss';
import APIApparel from './APIApparel.jsx';

function HomePage() {

    let pgimg = {
        width: '100%',
        height: '50%'
    };

    
    
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
                        <img src={whiteDress} alt="logo" style={ pgimg } />
                        <p> Buy Now!</p>
                    </div>

                    <div className="column">
                        <img src={RedDressLoose} alt="logo"  style={ pgimg } />
                        <p> Buy Now!</p>
                    </div>

                    <div className="column">
                        <img src={JeansDadBlack} alt="logo" style={ pgimg } />
                        <p> Buy Now!</p>
                    </div>

                </div>
                    <APIApparel/>
            </div>
        );
}
export default HomePage;