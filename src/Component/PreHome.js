import React, { Component } from 'react';
import Home from './Home';

 class PreHome extends Component {
     constructor(props) {
         super(props)
         this.state = {  
         }
     }
     
    render() {
       
        return(
            <React.Fragment>
                <Home />
            </React.Fragment>
        )
    }
}

export default PreHome