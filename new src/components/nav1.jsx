import React,{ Component } from 'react';
import {Link} from 'react-router-dom'
import './nav1.css';
class Nav1 extends Component
{
  state={
    datapass:this.props.datanav,
    productdata:null
  }
  functionpass=(dataset)=>{
    document.getElementById('modelname').innerHTML=dataset.name;
    document.getElementById('modelimg').src=dataset.images;
    document.getElementById('modeinfo').innerHTML=dataset.info;
    
  }
  funproduinside=(n)=>
  {
    return this.props.statedata[n].products.map(mydata=>{
       
       return <a className="dropdown-item" >{mydata.name}</a>
    })
  }
  funplaceinside=(n)=>
  {
    return this.props.statedata[n].tourist.map(mydata=>{
      return <a className="dropdown-item" onClick={()=>this.functionpass(mydata)} data-toggle="modal" data-target="#exampleModalCenter">
      {mydata.name}
      </a>
    })
  }
  linksmake = this.props.statedata.map((data,index)=>{
    return <li className="dropdown-submenu">
    <a className="dropdown-item dropdown-toggle">{data.name}</a>
    <ul className="dropdown-menu dropdown-menu-left" aria-labelledby="navbarDropdownMenuLink">
           <li className="dropdown-submenu">
           <a className="dropdown-item dropdown-toggle" >products</a>
              <ul className="dropdown-menu dropdown-menu-left" aria-labelledby="navbarDropdownMenuLink">
              {
              this.funproduinside(index)
              }
              </ul>
           </li>  
           <li className="dropdown-submenu">
           <a className="dropdown-item dropdown-toggle" >places</a>
              <ul className="dropdown-menu dropdown-menu-left" aria-labelledby="navbarDropdownMenuLink">
              {
              this.funplaceinside(index)
            }
              </ul>
             
           </li> 
           
      
    
       {/* <li><a className="dropdown-item" href="#">{data.tourist}</a></li> */}
    </ul>
 </li>                          
     }
     )

    render()
    {
      
      console.log(this.props.statedata);
        return (
          <div>
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
         <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
         <span className="navbar-toggler-icon"></span>
         </button>
         <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
               <li className="nav-item active">
                <Link className="nav-link" to={{
                  pathname: "/overview",
                  state: {
                  datapass1: this.state.datapass,
                  statedata:this.props.statedata
                  }
                  }}>Overview <span className="sr-only">(current)</span></Link>
              </li>
              <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle" href="http://example.com" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  States
                  </a>
                  <ul className="dropdown-menu dropdown-menu-left" aria-labelledby="navbarDropdownMenuLink">
                     {this.linksmake}
                  </ul>
               </li>
              <li className="nav-item">
                <Link className="nav-link" to={{
                  pathname: "/placetovisit",
                  state: {
                  datapass2: this.state.datapass,
                  statedata:this.props.statedata
                  }
                  }}>Places To Visit</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={{
                  pathname: "/food",
                  state: {
                  datapass3: this.state.datapass,
                  statedata:this.props.statedata
                  }
                  }}>Food</Link>
              </li>
              <li className="nav-item">
              <Link className="nav-link" to={{
                pathname: "/Displayproducts",
                state: {
                datapass4: this.state.datapass,
                statedata:this.props.statedata
                }
                }}>Shopping</Link>
            </li>
              <li className="nav-item">
              <Link className="nav-link" to={{
                pathname: "/besttime",
                state: {
                datapass5: this.state.datapass,
                statedata:this.props.statedata
                }
                }}>Climate & Geography</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link">Map View</Link>
            </li>
            <li className="nav-item">
            <Link className="nav-link" to={{
              pathname: "/besttime",
              state: {
              datapass6: this.state.datapass,
              statedata:this.props.statedata
              }
              }}>Best Time To Visit</Link>
          </li>
               
            </ul>
         </div>
      </nav>




<div className="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
<div className="modal-dialog modal-dialog-centered" role="document">
  <div className="modal-content">
    <div className="modal-header">
      <h5 className="modal-title" id="exampleModalLongTitle"><font id="modelname"></font></h5>
      <button type="button" className="close" data-dismiss="modal" aria-label="Close">
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
    <div className="modal-body" id="modelname">
    <div className="card" >
  <img id="modelimg" className="card-img-top" src="" alt="Card image cap" />
  <div className="card-body">
  
    <p className="card-text" id="modeinfo"></p>
    
  </div>
  </div>
    </div>
    <div className="modal-footer">
      <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
    </div>
  </div>
</div>
</div>
</div>
        )
    }
}
export default Nav1;
