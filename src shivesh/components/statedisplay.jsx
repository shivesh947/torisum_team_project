import React,{ Component } from 'react';

class Statedisplay extends Component{
    render(){
        console.log(this.props.location.state.datapass)
        return(
            <div>{this.props.datapass}</div>
        )
    }
}
export default Statedisplay;