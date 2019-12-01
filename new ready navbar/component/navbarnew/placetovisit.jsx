import React,{ Component } from 'react';
import Nav1 from './nav1';

class Placetovisit extends Component{
    render(){
        return(
        <div>
            <Nav1 datanav={this.props.location.state.datapass2} />
            {console.log(this.props.location.state.datapass2)}
        </div>
        )
    }
}
export default Placetovisit;