import React, { Component } from 'react';
import axios from 'axios';

class APIPromos extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            promos: [],
            isLoading: true
         };
         this.getPromos = this.getPromos.bind(this);
         console.log(this.state.promos)
    }

    getPromos = async () => {
        const {promos} = this.state;
        const response = await axios.get('/promos_api/v1/promo', );
        this.setState({data: response.data})
        console.log(this.state.data[0].shirt)
        console.log(this.state.data.shirt)
      }

    componentDidMount(){
        axios.get(`/promos_api/v1/promo`)
        .then( res => {
            const promos = res.data;
            this.setState({ promos })
        })
    }

    render() {
        return (
            <div>
                <ul>
                    <li>
                        { this.state.promos.map}
                            
                    </li>
                </ul>
            </div>
        );
    }
}

export default APIPromos;