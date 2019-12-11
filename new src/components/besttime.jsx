import React,{ Component } from 'react';
import Nav1 from './nav1';
// import three from '../images/rain.jpg';
// import one from '../images/clear-day.png';
// import two from '../images/partly-cloudy-day.png';
import './besttime.css';
let res="";
class Besttime extends Component{
    constructor()
    {
        super();
        this.state={
            cli:[],
            lat:'',
            long:'',
            loading:true,
        }
        this.fun1=this.fun1.bind(this);
        this.f1=this.f1.bind(this);
    }
    componentDidMount() {
        fetch('http://localhost:3004/loc') 
        .then(res =>{return res.json()})  
        .then(res =>{
            
            for(let i=0;i<res.length;i++)
            {
             //console.log(res[i].state)
            if(res[i].state==this.props.location.state.datapass5.name)
            {
                this.state.lat=res[i].lat;
                this.state.long=res[i].long;
                break;
            }
           }
          this.fun1(this.state.lat,this.state.long);
        })
      }
      async fun1(a,b)
      {
        const data=await fetch('https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/c4c85d231b9981e2cfee8e119c2e8352/'+a+','+b) 
        const newd=await data.json();
        console.log(newd)
        this.setState({cli:newd,loading:false})
        //console.log(this.state.cli)
      }
      f1(val)
      {        
       if(!this.state.cli)
       {
        console.log("hello")
        let x=document.getElementById("weatdiv");
       if(val=="clear-day")
       {
        x.setAttribute("src","https://cdn4.iconfinder.com/data/icons/daytime-weather/100/day-sunny-512.png");
       }
       else if(val=="partly-cloudy-day")
       {
        x.setAttribute("src","https://cdn1.iconfinder.com/data/icons/weather-forecast-meteorology-color-1/128/weather-partly-sunny-512.png");
       }
       else
       {
        x.setAttribute("src","https://cdn0.iconfinder.com/data/icons/weather-196/32/Drizzle-512.png");
       }
      }
      else
      {
          console.log("error")
      }
      }
    render(){
        return(
            <div>
            {this.state.loading||!this.state.cli?(
                <div>{console.log('loading')}</div>):(
                    <div>
                    {console.log(this.props.location.state.datapass5)}
                        <Nav1 datanav={this.props.location.state.datapass6} statedata={this.props.location.state.statedata}/>
                       
                       
                    </div>
                )
            }
            </div>
           
       
        )
    }
}
export default Besttime;
