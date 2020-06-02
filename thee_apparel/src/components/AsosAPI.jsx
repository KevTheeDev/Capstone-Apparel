import React from 'react';
import axios from 'axios';

class AsosAPI extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            asos: [],
            isLoading: true
         };
         this.getAsos = this.getAsos.bind(this);
    }

    getAsos = async () => {
        const {asos} = this.state;
        const response = await axios.get("https://asos2.p.rapidapi.com/products/v3/detail?store=US&sizeSchema=US&lang=en-US&currency=USD&id=9851612", {
            "method": "GET",
            "headers": {
                "x-rapidapi-host": "asos2.p.rapidapi.com",
                "x-rapidapi-key": "ca4d822af1mshcd1cd32cc32fceep1a6fe7jsnede64caa32ce"
            }       
        })  
        .then(response => {
            console.log(response);
        })
        .catch(err => {
            console.log(err);
        });
    }

    render() {
        return (
        <div>

        </div>
        );
    }
}

export default AsosAPI;

