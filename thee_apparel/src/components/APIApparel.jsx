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
        const responseApparel = await axios.get('http://localhost:8080/apparel_api/v1/clothes');
        this.setState({data: responseApparel.data})
        console.log(this.state.data[0].name)
        console.log(this.state.data.name)

        // this.setState({ 
        //   apparel: responseApparel, 
        //   isLoading: false,
        // });
        // console.log(this.state.apparel)
      }

    render() {
        return (
            <div>

            </div>
        );
    }
}

export default APIApparel;