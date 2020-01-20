import React, { Component } from 'react';
import {Route, BrowserRouter} from 'react-router-dom';
import PreHome from './Component/PreHome';
import Home from './Component/Home';
import Add from './Component/Add';
import Table from './Component/Table';
import Book from './Component/Book';
import Confirm from './Component/Confirm';
import Conformation from './Component/Conformation';

class App extends Component {
  constructor(props) {
      super(props)
      this.state = {
      }
    }
    render(){
      return (
        <div className="App">
          <BrowserRouter>
              <Route  exact path="/" render={props => <PreHome {...props}/>}/>
              <Route  path="/Home" render={props => <Home {...props}/>}/>
              <Route  path="/Add" render={props => <Add {...props}/>}/>
              <Route  path="/Table" render={props => <Table {...props}/>}/>
              <Route  path="/Confirm" render={props => <Confirm {...props}/>}/>
              <Route  path="/Conformation" render={props => <Conformation {...props}/>}/>
              <Route  path="/Book/:id" render={props=> < Book {...props}/>} />
            </BrowserRouter>
        </div>
  );
  }
}
export default App