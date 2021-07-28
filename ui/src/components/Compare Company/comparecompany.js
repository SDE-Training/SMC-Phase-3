import React, { Component } from 'react'
import axios from 'axios'
import Stockvstime from '../charts/Stockvstime';
import { useHistory, Link } from 'react-router-dom/cjs/react-router-dom.min';
import {
  Route,
  Router
} from "react-router-dom";
class Comparecompany extends Component {
  constructor() {
    super();
    this.state = {
      company1: '',
      company2: '',
      exchange1: '',
      exchange2: '',
      subbool:false
    }
    

  }
  changeHandler = e => {
    this.setState({ [e.target.name]: e.target.value })
    // console.log(e.target.value)
  }
  SubmitHandler = e => {
  
   
     e.preventDefault();
    //  funct(this.state);
  //  Child(this.state);
  console.log(this.state.subbool);
  this.state.subbool=true;
  console.log(this.state.subbool);
   function demo(){
     return(<h1>hi demo</h1>)
   } 

  
    
  }
  
  render() {
    return (
      <div className="creat">
        <form className="for" onSubmit={this.submit}>

          {/* <div> */}
          {/* <label>Company 1</label> */}
          <input type="number" name="company1" value={this.state.company1} onChange={this.changeHandler} placeholder="First Company Code" />
          {/* </div> */}
          <br />
          {/* <div> */}
          {/* <label>Company 2</label> */}
          <input type="number" name="company2" value={this.state.company2} onChange={this.changeHandler} placeholder="Second Company Code" />
          {/* </div> */}
          <br />
          {/* <div> */}
          {/* <label>Exchange 1</label> */}
          <input type="text" name="exchange1" value={this.state.exchange1} onChange={this.changeHandler} placeholder="Exchange-1 " />
          {/* </div> */}
          <br />
          {/* <div> */}
          {/* <label>Exchange 2</label> */}
          <input type="text" name="exchange2" value={this.state.exchange2} onChange={this.changeHandler} placeholder="Exchange-2" />
          {/* </div> */}
          <button className="save" type="submit" onClick={this.SubmitHandler}>Submit </button>
            {/* <Link to={{pathname:"user/compare/chart", state:{code1:this.state.company1, code2:this.state.company2, exc1:this.state.exchange1, exc2:this.state.exchange2}}}>here</Link> */}
          

        </form >
     



      </div>

    )
  }
}

export default Comparecompany



const Child = (state) => {
   console.log(state);
   let code1 = '';
   let code2 = '';
   let exc1 = '';
   let exc2 = '';
  return (
  //  <Stockvstime code1={state.company1} code2={state.company2} exc1={state.exchange1} exc2={state.exchange2}/> 
  <h1>hello from child</h1>
  );
}