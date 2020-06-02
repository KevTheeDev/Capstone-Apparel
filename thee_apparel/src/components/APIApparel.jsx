import React, { Component } from 'react';
import axios from 'axios';

class APIApparel extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            apparel: [],
            isLoading: true
         };
         this.getApparel = this.getApparel.bind(this);
         console.log(this.state.apparel)
    }

    getApparel = async () => {
        const {apparel} = this.state;
        const response = await axios.get('/apparel_api/v1/clothes', );
        this.setState({data: response.data})
        console.log(this.state.data[0].shirt)
        console.log(this.state.data.shirt)
      }

    componentDidMount(){
        axios.get(`/apparel_api/v1/clothes`)
        .then( res => {
            const apparel = res.data;
            this.setState({ apparel })
        })
    }

    render() {
        return (
            <div>
                <ul>
                    <li>
                        { this.state.apparel.map}
                            
                    </li>
                </ul>
            </div>
        );
    }
}

export default APIApparel;