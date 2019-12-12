import React,{Component} from 'react';
import {BrowserRouter,Route,Switch} from 'react-router-dom';
import './App.css';

import Navbar from './component/navbar'

class App extends Component{
  state = {
    loading: false,
    statedata: null,
  };
  async componentDidMount() {
    const url = "http://localhost:4000/state";
    const response = await fetch(url);
    const jsondata = await response.json();
    var stringdata=JSON.stringify(jsondata);
    this.setState({ statedata: jsondata, loading: true });
  }
  render(){
    return(
      <BrowserRouter>
      <div>
          {this.state.loding || !this.state.statedata ? (
            <div>{console.log("loding")}</div>
          ) : ( 
            <div>
              <div>{console.log("loding done")}
            </div>
       <Navbar statedatapass={this.state.statedata}/>
       <Switch>

         {/* add routes here */}
        
        <Route path="/Category" component={Category}/>
       
      </Switch>
      </div>
          )}
        </div>
      </BrowserRouter>
    )
  }
}


export default App;
